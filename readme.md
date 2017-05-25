# Start routing

* setup Routes
* set /search as default route


#### hints
<pre>
  { 
       path: 'search', 
       component: SearchComponent,
       pathMatch: 'full'
  },
  { 
       path: '', 
       redirectTo: '/search',
       pathMatch: 'full'
  }
</pre>