var tp1 = Ext.create('Ext.Template', ['Hello {firstName} {lastName}', 'Nice to meet you!'])
var formPanel = Ext.create('Ext.form.FormPanel', {
  itemId: 'formPanel',
  frame: true,
  layout: 'anchor',
  defaultType: 'textfield',
  defaults: {
    anchor: '-10',
    labelWidth: 65
  },
  items: [
    {
      fieldLabel: 'First Name',
      name: 'firstName'
    },
    {
      fieldLabel: 'Last Name',
      name: 'lastName'
    }
  ],
  buttons: [
    {
      text: 'Sumbit',
      handler: function () {
        var formPanel = this.up('#formPanel')
        var vals = formPanel.getValues()
        var greeting = tp1.apply(vals)
        Ext.Msg.alert('Hello', greeting)
      }
    }
  ]
})
Ext.onReady(function () {
  Ext.Msg.alert('Content', 'who are you')
  Ext.create('Ext.window.Window', {
    width: 200,
    height: 125,
    closable: false,
    title: 'Input needed',
    border: false,
    layout: 'fit',
    items: formPanel
  }).show()
})
