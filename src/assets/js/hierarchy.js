console.log("Este srcip se cargo dinámicamenet usando un Service en Anuglar")

// Este código no funciona
// document.addEventListener("DOMContentLoaded", () => {
//     const treeElements = document.querySelectorAll<HTMLElement>(".genealogy-tree ul");
//     Array.from(treeElements).forEach(treeElement => {
//         treeElement.style.display = "none";
//     });
//     const firstTreeElement = document.querySelector<HTMLElement>('.genealogy-tree>ul');
//     if (firstTreeElement) {
//         firstTreeElement.style.display = "";
//     }
//     const activeTreeElement = document.querySelector<HTMLElement>('.genealogy-tree ul.active');
//     if (activeTreeElement) {
//         activeTreeElement.style.display = "";
//     }
//     const treeItems = document.querySelectorAll<HTMLElement>(".genealogy-tree li");
//     Array.from(treeItems).forEach(treeItem => {
//         treeItem.addEventListener('click', (e) => {
//             let children = treeItem.querySelector<HTMLElement>(' ul');
//             if (children && children.style.display === "block") {
//                 children.style.display = "none";
//                 children.classList.remove("active");
//             } else if (children) {
//                 children.style.display = "block";
//                 children.classList.add("active");
//             }
//             e.stopPropagation();
//         });
//     });
// });


// ******* Jquery
// $(function () {
//     $('.genealogy-tree ul').hide();
//     $('.genealogy-tree>ul').show();
//     $('.genealogy-tree ul.active').show();
//     $('.genealogy-tree li').on('click', function (e) {
//         var children = $(this).find('> ul');
//         if (children.is(":visible")) children.hide('fast').removeClass('active');
//         else children.show('fast').addClass('active');
//         e.stopPropagation();
//     });
// });
