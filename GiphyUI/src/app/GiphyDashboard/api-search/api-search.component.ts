import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiSearchSeriviceService } from '../api-search-serivice.service';

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css']
})
export class ApiSearchComponent implements OnInit {
  
  @ViewChild('imagePopup') imagePopup:ElementRef;

  title = "Welcome to GiphySearch";
  allGiphies = [];
  searchHistoryTags = ['Animals','Birds','Flowers'];
  showError = false;
  showPopup = false;
  loadingMsg = 'No Images Loaded...';
  ErrorText = '';

  constructor(private searchService:ApiSearchSeriviceService) {
    
  }

  ngOnInit() {
    
  }

  saveSearchHistory(searchTerm: HTMLInputElement):void{
    let searchTag = searchTerm.value;
    searchTerm.value = '';
    searchTerm.placeholder = "Enter Keyword";
    if(!searchTag){
      this.showError = !this.showError;
      this.ErrorText = "Please Enter a Keyword"; 
    }
    this.performSearch(searchTag);
  }

  performSearch(searchTag:string): void {    
    this.loadingMsg = 'Loading...';
    this.searchService.getData(searchTag,12).subscribe((res: any[] )=>{
      this.allGiphies = res['data'];
      if(!this.allGiphies.length) {
        this.loadingMsg = 'No data found..';
        return false;
      }
      else {
        this.searchHistoryTags.indexOf(searchTag) == -1? this.searchHistoryTags.push(searchTag):'';
        this.loadingMsg = 'Click on any image to Play.';
      }
    });
  }

  imgClick(e) {
    let target = e.target;
    let ind = target.getAttribute('data-index');
    let imgSrc = this.allGiphies[ind].images.original.url;  
    this.handlePopupView(imgSrc);
  }

  handlePopupView(src){
    this.showPopup = !this.showPopup;
    this.imagePopup.nativeElement.src = src;
  }

}
