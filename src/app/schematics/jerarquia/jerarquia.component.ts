import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jerarquia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jerarquia.component.html',
  styleUrls: ['./jerarquia.component.css']
})
export class JerarquiaComponent implements OnInit {
  mostrar: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  mostrme() {
    this.mostrar = ! this.mostrar;
    console.log(this.mostrar);
  }

  // $(function () {
  //     $('.genealogy-tree ul').hide();
  //     $('.genealogy-tree>ul').show();
  //     $('.genealogy-tree ul.active').show();
  //     $('.genealogy-tree li').on('click', function (e) {
  //         var children = $(this).find('> ul');
  //         if (children.is(":visible")) 
  //           children.hide('fast').removeClass('active');
  //         else 
  //           children.show('fast').addClass('active');
  //         e.stopPropagation();
  //     });
  // });


  // document.addEventListener("DOMContentLoaded", () => {
  //     document.querySelectorAll(".genealogy-tree ul").style.display = "none";
  //     $('.genealogy-tree>ul').style.display = "";
  //     $('.genealogy-tree ul.active').style.display = "";
  //     document.querySelectorAll(".genealogy-tree li").addEventListener('click', (e) => {
  //         let children = this.find('> ul');
  //         if (children.is(":visible")) children.hide('fast').classList.remove("active");
  //         else children.show('fast').classList.add("active");
  //         e.stopPropagation();
  //     });

}
