export enum HTMLInputType {
	Button = 'button',
	Checkbox = 'checkbox',
	Color = 'color',
	Date = 'date',
	DatetimeLocal = 'datetime-local',
	Email = 'email',
	File = 'file',
	Hidden = 'hidden',
	Image = 'image',
	Month = 'month',
	Number = 'number',
	Password = 'password',
	Radio = 'radio',
	Range = 'range',
	Reset = 'reset',
	Search = 'search',
	Submit = 'submit',
	Tel = 'tel',
	Text = 'text',
	Time = 'time',
	Url = 'url',
	Week = 'week',
}

export enum HTMLAutocompleteAttribute {
	Off = 'off',
	On = 'on',
	Name = 'name',
	HonorificPrefix = 'honorific-prefix',
	GivenName = 'given-name',
	AdditionalName = 'additional-name',
	FamilyName = 'family-name',
	HonorificSuffix = 'honorific-suffix',
	Nickname = 'nickname',
	Email = 'email',
	Username = 'username',
	NewPassword = 'new-password',
	CurrentPassword = 'current-password',
	OneTimeCode = 'one-time-code',
	OrganizationTitle = 'organization-title',
	Organization = 'organization',
	StreetAddress = 'street-address',
	Shipping = 'shipping',
	Billing = 'billing',
	AddressLine1 = 'address-line1',
	AddressLine2 = 'address-line2',
	AddressLine3 = 'address-line3',
	AddressLevel4 = 'address-level4',
	AddressLevel3 = 'address-level3',
	AddressLevel2 = 'address-level2',
	AddressLevel1 = 'address-level1',
	Country = 'country',
	CountryName = 'country-name',
	PostalCode = 'postal-code',
	CcName = 'cc-name',
	CcGivenName = 'cc-given-name',
	CcAdditionalName = 'cc-additional-name',
	CcFamilyName = 'cc-family-name',
	CcNumber = 'cc-number',
	CcExp = 'cc-exp',
	CcExpMonth = 'cc-exp-month',
	CcExpYear = 'cc-exp-year',
	CcCsc = 'cc-csc',
	CcType = 'cc-type',
	TransactionCurrency = 'transaction-currency',
	TransactionAmount = 'transaction-amount',
	Language = 'language',
	BDay = 'bday',
	BDayDay = 'bday-day',
	BDayMonth = 'bday-month',
	BDayYear = 'bday-year',
	Sex = 'sex',
	Tel = 'tel',
	TelCountryCode = 'tel-country-code',
	TelNational = 'tel-national',
	TelAreaCode = 'tel-area-code',
	TelLocal = 'tel-local',
	TelExtension = 'tel-extension',
	Impp = 'impp',
	Url = 'url',
	Photo = 'photo',
	Webauthn = 'webauthn',
}

export enum InputSize {
	SM = 'sm',
	MD = 'md',
	LG = ' lg',
}

export enum InputFieldEvent {
	Blur = 'blur',
	Focus = 'focus',
	Change = 'change',
	Input = 'update:modelValue',
}

export const validTextInputFieldTypes: HTMLInputType[] = [
	HTMLInputType.Text,
	HTMLInputType.Email,
	HTMLInputType.Password,
	HTMLInputType.Tel,
	HTMLInputType.Url,
	HTMLInputType.Search,
	HTMLInputType.Number,
	HTMLInputType.Date,
	HTMLInputType.DatetimeLocal,
	HTMLInputType.Month,
	HTMLInputType.Time,
	HTMLInputType.Week,
];
