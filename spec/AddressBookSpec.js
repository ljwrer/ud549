describe("addressBook", function() {
	var myAddressBook,
		thisContact;
	beforeEach(function() {
		myAddressBook = new AddressBook();
		thisContact = new Contact();
	});
	it("should be able to add contact", function() {
		myAddressBook.add(thisContact);
		expect(myAddressBook.getContact(0)).toBe(thisContact)
	});
	it("should be able to delete contact", function() {
		myAddressBook.add(thisContact);
		myAddressBook.deleteContact(0);
		expect(myAddressBook.getContact(0)).not.toBeDefined();
	});
})
describe("Async address book", function() {
	var myAddressBook = new AddressBook();
	beforeEach(function(done) {
		myAddressBook.getInitialContacts(function() {
			done();
		})
	})
	it("should grap initial contacts", function(done) {
		expect(myAddressBook.initialComplete).toBe(true);
		done();
	})
})