async function getData() {
    const result = await fetch('https://oron-web-component-wrapper.herokuapp.com/data');
    const json = await result.json();
    document.getElementsByTagName('my-paragraph')[0].innerHTML = json.data.allow ? 'GET pass' : 'FAIL TO GET!!!!';
    console.info( json.data);
}
async function postData() {
    const result = await fetch('https://oron-web-component-wrapper.herokuapp.com/data', { method: 'POST'});
    const json = await result.json();
    console.error( json.data);
}
getData();
postData();