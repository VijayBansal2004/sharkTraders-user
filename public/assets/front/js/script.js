var $body = document.getElementsByTagName("body")[0];
var $btnCopy = document.getElementById("btnCopy");
var $btnCopyPartner = document.getElementById("btnCopyPartner");
var secretInfo = document.getElementById("secretInfo")?.innerHTML;

var copyToClipboard = function (secretInfo) {
  var $tempInput = document.createElement("INPUT");
  $body.appendChild($tempInput);
  $tempInput.setAttribute("value", secretInfo);
  $tempInput.select();
  document.execCommand("copy");
  $body.removeChild($tempInput);
};

$btnCopy?.addEventListener("click", function (ev) {
  copyToClipboard(secretInfo);
  document.getElementById("btnCopy").innerHTML = "Copied!";
  //swal("Here's a message!");
});

$btnCopyPartner?.addEventListener("click", function (ev) {
  copyToClipboard(secretInfo);
  document.getElementById("btnCopyPartnericon").innerHTML = "Copied!";
  document.getElementById("clipboard-icon").style.display = "none";
  document.getElementById("btnCopyPartnericon").style.display = "block";

  setTimeout(() => {
    const boxicon = document.getElementById("btnCopyPartnericon");
    boxicon.style.display = "none";
    document.getElementById("clipboard-icon").style.display = "block";
  }, 5000);
});

$(".toggle-password")?.click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// menu item toggle
$(document).ready(function () {
  $(".nk-menu-item.has-sub > .nk-menu-link.nk-menu-toggle")?.on(
    "click",
    function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      var $parentLi = $(this).closest(".nk-menu-item.has-sub");
      var $subMenu = $parentLi.children(".nk-menu-sub");

      // Toggle active class
      $parentLi.toggleClass("active");

      // Toggle display of submenu
      if ($parentLi.hasClass("active")) {
        $subMenu.show();
      } else {
        $subMenu.hide();
      }

      // Check if submenu contains another menu-link with submenu
      var $nestedMenuLink = $subMenu.find(".nk-menu-link.nk-menu-toggle");
      if ($nestedMenuLink.length) {
        $nestedMenuLink.on("click", function (e) {
          e.preventDefault();
          var $nestedSubMenu = $(this).next(".nk-menu-sub");
          if ($nestedSubMenu.length) {
            $nestedSubMenu.toggle();
          }
        });
      }
    }
  );

  // Toggle classes on body and sidebar when .nk-quick-nav-icon is clicked
  $(".nk-quick-nav-icon").on("click", function () {
    $("body").toggleClass("nav-shown");
    $(".nk-sidebar").toggleClass("nk-sidebar-active");
  });

  // Toggle .as-mobile class based on viewport width
  function checkViewport() {
    if ($(window).width() < 768) {
      $("body").addClass("as-mobile");
    } else {
      $("body").removeClass("as-mobile");
    }
  }

  checkViewport(); // Initial check
  $(window).on("resize", checkViewport); // Check on resize

  // caret-down
  $(".inner-tree-network").on("click", function () {
    $(this).toggleClass("caret-down"); // Toggle .caret-down on clicked element
    $(this).siblings(".nested").toggleClass("active"); // Toggle .active on sibling .nested element
  });

  // notification-dropdown
  $(".notification-dropdown, .user-dropdown").click(function (event) {
    event.stopPropagation(); // Prevent click event from bubbling up
    $(this).children(".dropdown-menu").toggle(); // Toggle dropdown visibility
    $("body").removeClass("nav-shown");
    $(".nk-sidebar").removeClass("nk-sidebar-active");
  });

  // Close dropdown when clicking outside
  $(document).click(function () {
    $(".dropdown-menu").hide();
  });

  // active sidemenu tab
  let currentFileName = window.location.pathname.split("/").pop(); // Get the current file name from URL

  $("a.nk-menu-link").each(function () {
    let linkFileName = $(this).attr("href").split("/").pop(); // Extract file name from href

    if (linkFileName === currentFileName) {
      $("a.nk-menu-link")
        .closest(".nk-menu-item")
        .removeClass("active current-page"); // Remove classes from other elements
      $(this).closest(".nk-menu-item").addClass("active current-page"); // Add classes to the matching element
    }
  });

  $("li.nk-menu-item.active.current-page").parent().addClass("d-block");
});
