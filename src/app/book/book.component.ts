import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public managements : Book[] = [];
  public newAuthor : string = "";
  public newTitle : string = "";

  ngOnInit() {
    let savedDetails = localStorage.getItem("managements");
    this.managements = savedDetails ? JSON.parse(savedDetails) : [];
  }

  public addBookDetails(){
    if(this.newAuthor && this.newTitle){
      let newBookDetail : Book = {
        id : Date.now(),
        author : this.newAuthor,
        title : this.newTitle
      };
      this.managements.push(newBookDetail);
      localStorage.setItem("managements", JSON.stringify(this.managements));
      this.newAuthor = "";
      this.newTitle = "";
    }
  }

  public deleteEntry(index : number){
    this.managements.splice(index,1);
    localStorage.setItem("managements", JSON.stringify(this.managements));
  }
}
