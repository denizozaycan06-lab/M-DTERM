document.addEventListener("DOMContentLoaded", function() {
  
  
  
    fetch('components/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('header mefta');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('kafa').innerHTML = data;
    })
    .catch(error => {
        console.error('header takıldı', error);
    });

    fetch('components/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('footer mefta');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('bacanak').innerHTML = data;
    })
    .catch(error => {
        console.error('footer takıldı', error);
    });

});













