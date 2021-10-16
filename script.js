function myFunction() {
    let nav = document.getElementById('my-nav');

    console.log(nav)

    if (nav.className === 'topnav') {
      nav.className += 'responsive';
    } else {
      nav.className = 'topnav';
    }
  }