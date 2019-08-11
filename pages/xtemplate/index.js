var tpData = [
  {
    name: 'mvn'
  },
  {
    name: 'json'
  }
]

var tpinstance = Ext.create(
	'Ext.XTemplate',
  [
    `
  <div>
   <tpl for="."
       <div>{name}</div>
   </tpl> 
          <tpl if="this.isValidable(1032,323)"><div>ok,value</div></tpl>
          </div>
    `
  ],
)

tpinstance.compile()
tpinstance.isValidable = function(...arr){
    console.log(arr)
    return false;
}
tpinstance.append(document.body, tpData)
