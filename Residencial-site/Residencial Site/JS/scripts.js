const $html = document.querySelector('html')
const $checkbox = document.querySelector('#themeToggle')

        $checkbox.addEventListener('change', function(){
        $html.classList.toggle('dark-mode')
    })
  
