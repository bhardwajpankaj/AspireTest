// We are using below get and post methods for getting Data from API's
export default class RequestHandler{
    getData = (url, callback) =>  {

          fetch(url)
            .then(response => response.json())
            .then(result => {
              console.log("API Success");
              callback(result);
            })
            .catch(error => {
              console.log("API Error"+error);
            });
    }

    postData = (endPint, params, callback)=> {
      // console.log("params are" + params)
    
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        var raw = JSON.stringify(params)
        var requestOptions = {
          method: 'POST',
          body:raw,
          headers: myHeaders,
        };
    
        fetch(endPint, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log("API Success");
            callback(result);
          })
          .catch(error => {
            console.log("API Error "+error);
            callback(error);
          });
  }
}