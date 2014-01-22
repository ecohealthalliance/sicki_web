Template.referencesPlugin.helpers({
  refLink: function(){
    console.log(this.refs)
    console.log(References.find({refID: {$in:this.refs}}))
    return References.find({refID: {$in:this.refs}});
  },
  fields: function() {
    return [
      {
        key: 'id',
        label: 'ID'
      }, {
        key: 'title',
        label: 'Title'
      }, {
        key: 'container-title',
        label: 'Journal'
      }
    ];
  }
});
