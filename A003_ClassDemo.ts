class Insurance
{
	insuranceId: number;
	name: string;
	premiumAmount: number;
	coverageAmount: number;
	nextDueDate: Date;
	nominee: string;

	constructor(insuranceId: number, name: string, premiumAmount: number, coverageAmount: number, nextDueDate: Date, nominee: string)
	{
		this.insuranceId = insuranceId;
		this.name = name;
		this.premiumAmount = premiumAmount;
		this.coverageAmount = coverageAmount;
		this.nextDueDate = nextDueDate;
		this.nominee = nominee;
	}

	display()
	{
		console.log(`Insurance Id: ${this.insuranceId}\nName: ${this.name}\nPremium: ${this.premiumAmount}\nCoverage: ${this.coverageAmount}\nDue Date: ${this.nextDueDate}\nNominee: ${this.nominee}\n\nWritten by: Vikas Tripathi\n`);
	}
}

new Insurance(1, 'Vikas', 24000, 500000, new Date('2023-06-01'), 'Mom').display();