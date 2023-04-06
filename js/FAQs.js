   
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
      $("#childen").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'childen'}
      });
      $("#DropList1").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList1'}
      });
      $("#DropList2").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList2'}
      });
      $("#DropList3").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList3'}
      });
      $("#DropList4").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList4'}
      });
      $("#DropList5").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList5'}
      });
      $("#DropList6").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList6'}
      });
      $("#DropList7").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList7'}
      });
      $("#DropList8").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList8'}
      });
      $("#DropList9").droplist(
      {
   
         classes: {'ui-selectmenu-menu':'DropList9'}
      });
   });
