import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JerarquiaService } from './../../service/jerarquia.service';

@Component({
  selector: 'app-jerarquia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jerarquia.component.html',
  styleUrls: ['./jerarquia.component.css']
})
export class JerarquiaComponent implements OnInit {
  
  constructor(private serviceJerarquia: JerarquiaService) {
    this.serviceJerarquia.loadScript();
   }

  ngOnInit(): void {
   this.mostarSoloCEO();
  }

  mostarSoloCEO() {
    const treeElements = document.querySelectorAll<HTMLElement>(".genealogy-tree ul");
      Array.from(treeElements).forEach(treeElement => {
          treeElement.style.display = "none";
      });
      const firstTreeElement = document.querySelector<HTMLElement>('.genealogy-tree>ul');
      if (firstTreeElement) {
          firstTreeElement.style.display = "";
      }
  }

  mostrarJerarquia() {
      const treeElements = document.querySelectorAll<HTMLElement>(".genealogy-tree ul");
      Array.from(treeElements).forEach(treeElement => {
          treeElement.style.display = "none";
      });
      const firstTreeElement = document.querySelector<HTMLElement>('.genealogy-tree>ul');
      if (firstTreeElement) {
          firstTreeElement.style.display = "";
      }
      const activeTreeElement = document.querySelector<HTMLElement>('.genealogy-tree ul.active');
      if (activeTreeElement) {
          activeTreeElement.style.display = "";
      }
      const treeItems = document.querySelectorAll<HTMLElement>(".genealogy-tree li");
      Array.from(treeItems).forEach(treeItem => {
          treeItem.addEventListener('click', (e) => {
              let children = treeItem.querySelector<HTMLElement>(' ul');
              if (children && children.style.display === "block") {
                  children.style.display = "none";
                  children.classList.remove("active");
              } else if (children) {
                  children.style.display = "block";
                  children.classList.add("active");
              }
              e.stopPropagation();
          });
      });

  }
}
