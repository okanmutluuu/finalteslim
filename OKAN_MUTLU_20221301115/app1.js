
    var form = document.getElementById('myForm');
    var emailInput = document.getElementById('emailInput');
  
    form.addEventListener('submit', function(event) {
      if (!emailInput.checkValidity()) {
        event.preventDefault();
        alert('Please enter a valid email address.');
      } else {
        event.preventDefault();
        showPopup();
      }
    });


    
  
  
    function showPopup() {
        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = '<p>Email adresiniz başarıyla gönderildi!</p>';
        document.body.appendChild(popup);
    
     
        setTimeout(function() {
          document.body.removeChild(popup);
        }, 3000);
      }