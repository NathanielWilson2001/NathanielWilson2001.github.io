 const scrollViewSideways = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      }
      else{
        entry.target.classList.remove('show')
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
  elemen1.forEach(element => scrollViewSideways.observe(element));
  
  const elemen2 = document.querySelectorAll('.projectContainer');
  elemen2.forEach(element => scrollViewVertical.observe(element));


  const elemen3 = document.querySelectorAll('.bio');
  elemen3.forEach(element => scrollView.observe(element));