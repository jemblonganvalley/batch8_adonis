## # Adonisjs crash course - Build Instagram Clone adonise v5

from youtube channel [video](https://www.youtube.com/watch?v=VNwhqiu_oRk)

Apa saja yang akan kita pelajari dari video ini ?

1. Intro to adonisjs
2. controller and requests
3. validation rules
4. database and migrations
5. store user to database
6. authenticate user
7. adding middleware
8. understanding layout edge template engine
9. design sign up page in tailwind
10. sending email using adonis
11. refactoring code in adonis
12. email verifications
13. using signed url
14. create custom middleware
15. update migration schema
16. file uploading
17. upload new post
18. has many relationship
19. using model factory
20. preload relation data
21. instagram follow feature
22. unfollow any user
23. show post to following user only
24. deploy to server

## Selamat belajar

## 1 Intro adonis

Adonis merupakan sebuahframework dari nodejs MVC Framework, gaya adonis dalam memanage mvc mirip sekali dengan laravel.

Adonis merupakan pilihan yang tepat untuk teman teman dari php yang ingin migrasi ke javascript.
pastikan kita sudah melakukan instalasi nodejs dan npm.

Sialakan check versi nodejs teman teman :

```bash
npm -v
```

Silkan teman teman buat sebuah project baru dengan adonis dengan cara :

```bash
npm init adonis-ts-app adonisgram
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j7whxat0hmvj6pjwyqo6.png)

silakan isi seperti gambar diatas dan tekan enter dan tunggu...

silakan masuk ke dalam folder **adonisgram** dan buka dengan vscode

```
cd adonisgram
code .
```

dan jalankan adonis dengan cara :

```bash
node ace serve --watch
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/issj88rhjybutfgg5773.png)

View tersebut berjalan karena adanya routing di file **./starts/routes.tsx**

silakan buka file tersebut dan tambahkan routing lainnya,

```javascript
import Route from "@ioc:Adonis/Core/Route";

Route.on("/").render("welcome");
Route.on("/login").render("auth/login");
Route.on("/signup").render("auth/signup");
```

_on_ layaknya render pada express yang akan merender sebuah file .edge yang ada di dalam folder **./resorces/views/**

silakan buat folder di dalam **./recources/views** bernama **auth**, dan buat dua buah file bernama **login.edge** dan **signup.edge**

> Adonis menggunakan template engine bernama blade, silakan pelajari lebih lanjut blade pada [link berikut](https://edge.adonisjs.com/)

buat sebuah form sederhana pada kedua file tersbut

<small>./resources/views/auth/signup.edge</small>

```html
<form action="/signup" method="POST">
  <div>
    <label for="name">username</label>
    <input type="text" name="name" id="name" />
  </div>

  <div>
    <label for="email">email</label>
    <input type="email" name="email" id="email" />
  </div>

  <div>
    <label for="password">password</label>
    <input type="password" name="password" id="password" />
  </div>

  <div>
    <label for="password_confirmation">password_confirmation</label>
    <input
      type="password_confirmation"
      name="password_confirmation"
      id="password_confirmation"
    />
  </div>

  <div>
    <input type="submit" value="signup" />
  </div>
</form>
```

## 2. Controller and Request

Untuk membuat sebuah controller pada adonis, kita tidak perlu membuatnya sendiri, kita bisa menjalankan script **ace** dengan cara :

```bash
node ace make:controller SignUp
```

nantinya adonis akan membuatkan sebuah controller di dalam folder **./app/controller/http/** bernama **SignUpsController.js**

> Penambahan huruf _s_ di belakang nama controller sudah di berikan oleh adonis secara magic, jangan binggung.

Silakan kita buka file tersebut dan buat code seperti dibawah ini
<small>./app/controller/http/SignUpsController.ts</small>

```javascript
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class SignUpsController {
  public async readData(req: HttpContextContract) {
    return req.request.all();
  }
}
```

> Jangan lupa UNCOMMENT baris HttpContextContract, karena kita membutuhkannya dan secara default di hide oleh adonis

selanjutnya buka route file di **./starts/route.ts** dan buat seperti ini
<small>./starts/route.ts</small>

```javascript
Route.on("/").render("welcome");
Route.on("/login").render("auth/login");
Route.on("/signup").render("auth/signup");
Route.post("/signup", "SignUpsController.index");
```

Bisa teman teman lihat, untuk menambahkan routing pada adonis cukup dengan cara seperti ini, tentunya lebih mudah daripada express.

Silakan jalankan server adonis dengan cara :

```bash
npm run dev
```

Sekarang setiap ada route post ke /signup akan me return json seperti giff dibawah ini.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p4snvkzig8qjq9pv8cgs.gif)

Mantab jiwa..
lanjut video link click [disini](https://youtu.be/VNwhqiu_oRk?t=1596)
