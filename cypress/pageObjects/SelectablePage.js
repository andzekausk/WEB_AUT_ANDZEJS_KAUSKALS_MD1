import { BasePage } from "../pageObjects/BasePage";
export class SelectablePage extends BasePage{
    static get url(){
        return "/selectable/";
    }
    static get gridButton(){
        return cy.get("a#demo-tab-grid");
    }
    static numberButton(nmbr){
        return cy.get("div#gridContainer").contains(nmbr);
    }
    static checkIfHighlighted(nmbr){
        return cy.get('[class="list-group-item active list-group-item-action"]').should("contain", nmbr);
    }
    static checkIfNotHighlighted(nmbr){
        return cy.get('[class="list-group-item list-group-item-action"]').should("contain", nmbr);
    }
  }
  