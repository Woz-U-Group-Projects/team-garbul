// gallery component
// posts[] = data fetched through a service from teh backend
// gallery component -> html <div *ngFor="let post of posts"><img src="{{post.url}}">{{post.tags}}</div>


// input box and button for search
// raw array of data  == filtered array of data
// posts array
// filtered array = posts array
// filtered array is what gets pulled onto the page
// button (click) = "filterArray()"
// filterArray() === read input value, filteredarray.filter(v => v.tags.includes(searchWord))
// reset, filtered array = posts array