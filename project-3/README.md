# Table shaker monitoring dan kontrol PWM

Project ketiga praktikum sensor aktuator yaitu memonitoring perubahan perpindahan permukaan yang dihasilkan oleh gempa buatan.

## Pre-request

### Basic Knowledge
- [x] Web Programming
- [x] Arduino
- [x] Elektrikal

### Tools
- [x] [NodeJS](https://nodejs.org/en/download/) `Server-side Javascript runtime environment`
- [x] [Google Chrome](https://www.google.com/chrome/) `Web Browser`
- [x] [Visual Studio Code](https://code.visualstudio.com/) `Text Editor`


## Skema

### Rangkaian Sistem Monitor
![Electrical Circuit](electrical_schem.jpg "Electrical Circuit")

### Rangkaian Sistem Daya
![Power Circuit](power_schem.jpg "Power Circuit")

## Prosedur

1. Rangkai [rangkaian sistem monitor](#rangkaian-sistem-monitor).
2. Upload program program default yang telah disiapkan.
3. Mempersiapkan [website](https://github.com/ilomon10/praktikum-sensor-aktuator/tree/master/project-3/web) untuk tampilan monitor.

    > Note: Ikuti langkah berikut jika ingin memulai dari awal
    1. Buat proyek dengan perintah di dalam folder [web](https://github.com/ilomon10/praktikum-sensor-aktuator/tree/master/project-3/web) (buat folder baru jika belum tersedia)
    ```bash
    user@local:~/project-3/web 
    $ npm init -y
    ```
    2. Install paket modul program yang akan digunakan.
    ```bash
    user@local:~/project-3/web 
    $ npm install --save express    # framework aplikasi web.
    $ npm install --save socket.io  # library untuk komunikasi realtime.
    ```
    3. Buat file `index.js` dan `index.html` dalam folder `public`
4. Jalankan program [website](https://github.com/ilomon10/praktikum-sensor-aktuator/tree/master/project-3/web)nya.
```bash
user@local:~/project-3/web 
$ npm run start
```