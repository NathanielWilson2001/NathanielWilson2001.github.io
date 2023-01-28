 const scrollViewSidewaysLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('showLeft')
      }
      else{
        entry.target.classList.remove('showLeft')
      }

    });
  });

  const scrollViewSidewaysRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('showRight')
      }
      else{
        entry.target.classList.remove('showRight')
      }

    });
  });
  
  const scrollViewVertical = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('showUp')
      }
      else{
        entry.target.classList.remove('showUp')
      }

    });
  });

  const elemen1 = document.querySelectorAll('.skillContainer');
  elemen1.forEach(element => scrollViewSidewaysLeft.observe(element));
  
  const elemen2 = document.querySelectorAll('.projectContainer');
  elemen2.forEach(element => scrollViewSidewaysRight.observe(element));


  const elemen3 = document.querySelectorAll('.bio');
  elemen3.forEach(element => scrollViewVertical.observe(element));