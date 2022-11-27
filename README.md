# ALAMI Challenge Test

# Table of Contents
- [ALAMI Challenge Test](#alami-challenge-test)
- [Table of Contents](#table-of-contents)
- [Challenge](#challenge)
- [Getting Started](#getting-started)
  - [Clone](#clone)
  - [Install Dependencies](#install-dependencies)
  - [Run Project](#run-project)
    - [Android](#android)
    - [iOS](#ios)

# Challenge
Buatlah react native apps dengan feature:
1. Ambil device id dari mobile device menggunakan bridging native Android dan di IOS (tanpa
menggunakan library)
2. Buatlah suatu component keranjang dengan menggunakan react hook dan harus 1 render
ketika berganti value (misal menambah atau mengurang item)
3. Buatlah sebuah progress bar yang akan otomatis berjalan hingga 100% tetapi jika di tekan
(hold) animasi progress bar tersebut akan berhenti dan ketika di lepas holdnya akan jalan
kembali

Notes:
- Untuk UI di buat bebas yang bisa mencover semua case di atas
- Buatlah guide how to install dan jalankan aplikasi tersebut

# Getting Started

## Clone
Run in your terminal:
```
git clone https://github.com/gadingnst/alami-challenge.git
```

## Install Dependencies
1. Go to cloned folder in `alami-challenge/`, and then `npm install`
2. Go to `ios/`, then `pod install`.

## Run Project
### Android
Run command:
```
npm run android
```
or you can run via Android Studio by opening `android/` folder in `alami-challenge`.

### iOS
Run command:
```
npm run ios
```
or you can run via XCode by opening `ios/` folder in `alami-challenge`.