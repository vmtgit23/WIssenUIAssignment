var Insurance = /** @class */ (function () {
    function Insurance(insuranceId, name, premiumAmount, coverageAmount, nextDueDate, nominee) {
        this.insuranceId = insuranceId;
        this.name = name;
        this.premiumAmount = premiumAmount;
        this.coverageAmount = coverageAmount;
        this.nextDueDate = nextDueDate;
        this.nominee = nominee;
    }
    Insurance.prototype.display = function () {
        console.log("Insurance Id: ".concat(this.insuranceId, "\nName: ").concat(this.name, "\nPremium: ").concat(this.premiumAmount, "\nCoverage: ").concat(this.coverageAmount, "\nDue Date: ").concat(this.nextDueDate, "\nNominee: ").concat(this.nominee, "\n\nWritten by: Vikas Tripathi\n"));
    };
    return Insurance;
}());
new Insurance(1, 'Vikas', 24000, 500000, new Date('2023-06-01'), 'Mom').display();
