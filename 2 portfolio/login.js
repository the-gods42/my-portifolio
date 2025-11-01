
      (function(){
        emailjs.init("marvelkila59@gmail.com"); // Replace with your EmailJS user ID
      })();

      document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('marveltech', 'kiladejo marvellous', this)
        .then(function() {
          alert('Message sent!');
        }, function(error) {
          alert('Failed to send message: ' + error);
        });
      });