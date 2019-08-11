Ext.onReady(() => {
  Ext.define('MyApp.PressMeButton', {
    extend: 'Ext.button.Button',
    text: 'Press Me',
    alias: 'widget.pressmebutton'
  })
  Ext.create('Ext.container.Viewport', {
    layout: {
      type: 'border',
      padding: 5
    },
    defaults: {
      split: true
    },
    items: [
      {
        height: 75,
        region: 'north',
        collapsible: true,
        title: 'North here',
        items: [
          {
            xtype: 'button',
            text: '确定'
          },
          {
            xtype: 'pressmebutton'
          }
        ]
      },
      {
        width: 150,
        region: 'west',
        title: 'my test'
      },
      {
        region: 'center',
        title: 'here is center'
      }
    ]
  })
})
