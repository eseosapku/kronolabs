
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".netflix-navbar").css("background" , "#0C0C0C");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}

let currentPage = 1;

document.getElementById('nextButton').addEventListener('click', function() {
    if (currentPage < 2) {
        document.getElementById('page' + currentPage).style.display = 'none';
        currentPage++;
        document.getElementById('page' + currentPage).style.display = 'flex';
    } else {
        // Optional: Loop back to the first page or handle end of comic
        document.getElementById('page' + currentPage).style.display = 'none';
        currentPage = 1;
        document.getElementById('page' + currentPage).style.display = 'flex';
    }
});

// Initially show the first page
document.getElementById('page1').style.display = 'flex';
document.getElementById('page2').style.display = 'none';


$(document).ready(function() {
  $('#nextButton').on('click', function() {
      // Logic to go to the next page
      // For example, you could navigate to another comic page
      window.location.href = 'nextComic.html'; // Change this to your desired page
  });
});
