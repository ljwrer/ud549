function AddressBook(){
	this.contacts=[];
	this.initialComplete=false;
}
AddressBook.prototype={
	constructor:AddressBook,
	add:function(contact){
		this.contacts.push(contact);
	},
	getContact:function(index){
		return this.contacts[index];
	},
	deleteContact:function(index){
		this.contacts.splice(index,1);
	},
	getInitialContacts:function(cb){
		var self=this;
		setTimeout(function(){
			self.initialComplete=true;
			if(cb){
				cb();
			}
		},3)
	}
}

