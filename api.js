console.log("hello api")
var myHeaders = new Headers();
myHeaders.append("X-Shopify-Access-Token", "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");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://learning-bs.myshopify.com//admin/api/2022-10/collections/273402626093/products.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));