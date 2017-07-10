# giac-electron-example

This project is based on the
[electron-quick-start](https://github.com/electron/electron-quick-start)
example, extended by the native node version of the
[Giac](http://www-fourier.ujf-grenoble.fr/~parisse/giac.html) computer
algebra system.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com)
and [Node.js](https://nodejs.org/en/download/) (which comes with
[npm](http://npmjs.com)) installed on your computer, and certainly some extra
prerequisites (please see the [Node Giac](https://www.npmjs.com/package/giac)
page for more details). From your command line:

```bash
# Clone this repository
git clone https://github.com/kovzol/giac-electron-example
# Go into the repository
cd giac-electron-example
# Install dependencies
npm install
# Run the app
npm start
```

## Notes

This example is known to work under

* Linux
  * Ubuntu 16.04.2 (64 bit, node 7.7.4, npm 4.1.2, GMP 6.1.0, MPFR 3.1.4)
  * Ubuntu 16.10 (64 bit, node 6.2.2, npm 3.9.5, GMP 6.1.1, MPFR 3.1.5)
  * Ubuntu 17.04 (64 bit, node 6.10.3, npm 3.10.10, GMP 6.1.2, MPFR 3.1.5)
  * Raspberry Pi 3 (Raspbian Jessie, node 6.11.0, npm 3.10.10, GMP 6.0.0, MPFR 3.1.0, GCC 6)
* MacOS 10.11 "El Capitan" (node 6.6.0, npm 3.10.3, GMP 6.1.0, MPFR 3.1.3)
* Windows 10 (32 bit compilation required, node 6.10.3, npm 3.10.10, MPIR 2.6.0, MPFR 3.1.2)

Note that you may need to download a recent node.js version since older versions shipped with Ubuntu
will almost surely not work. Also you need a recent GCC under Linux, otherwise the C++ compilation
will fail.

## Author

Zoltán Kovács <zoltan@geogebra.org>

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
