   
   document.addEventListener('DOMContentLoaded', function(event)
   {
      var navbar_dropdownToggle = document.querySelectorAll('#navbar .dropdown-toggle');
      navbar_dropdownToggle.forEach(item => 
      {
         var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
      });
      var navbar_dropdown = document.querySelectorAll('#navbar .dropdown');
      navbar_dropdown.forEach(item => 
      {
         item.addEventListener('shown.bs.dropdown', function(e)
         {
            e.currentTarget.classList.add('show');
         });
         item.addEventListener('hidden.bs.dropdown', function(e)
         {
            e.currentTarget.classList.remove('show');
         });
      });
      $("#wb_navbar").affix({offset:{top: $("#wb_navbar").offset().top}});
   });
   
   $(document).ready(function()
   {
      $("#wb_navbar").affix({offset:{top: $("#wb_navbar").offset().top}});
   });
