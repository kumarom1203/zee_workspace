import { environment } from '../../../environments/environment.prod';

const baseUrl = environment.baseUrl;

const proj1 = '/b2b';
const proj2 = '/supervision';
const proj3 = '/sa';
const proj4 = '/b2c'
const portProj3 = ':4002';
const portProj4 = ':4004';

/* please maintain Ascending Order of the keys*/
export const apiMap = {
    agentAccountLedger: `${baseUrl + proj1}/transaction/service/AgentAccountLedger`,
    agentDetails: `${baseUrl + proj1}/user/service/AgentDetails`,
    airportList: `${baseUrl}/flight/service/AirportList`,
    addUser: `${baseUrl + portProj3 + proj3}/user/service/B2C/AddUser`,
    bankDetails: `${baseUrl + proj1}/transaction/service/BankDetails`,
    bankAccountDetails: `${baseUrl + proj2}/cms/service/BankAccountDetails`,
    balanceManager: `${baseUrl + proj1}/transaction/service/BalanceManager`,
    balanceRequest: `${baseUrl + proj1}/transaction/service/BalanceRequest`,
    banalanceTransferTypes: `${baseUrl + proj1}/transaction/service/BanalanceTransferTypes`,
    bookingCalender: `${baseUrl + proj1}/transaction/service/BookingCalender`,
    bookingDetails: `${baseUrl + proj1}/transaction/service/BookingDetails`,
    bookingReports: `${baseUrl + proj1}/flight/service/BookingReports`,
    cabinClass: `${baseUrl}/flight/service/CabinClass`,
    changePassword: `${baseUrl + proj1}/user/service/ChangePassword`,
    commitBooking: `${baseUrl}/flight/service/CommitBooking`,
    countryList: `${baseUrl}/supervision/common/service/CountryList`,
    creditLimitManager: `${baseUrl + proj1}/transaction/service/CreditLimitManager`,
    creditLimitRequest: `${baseUrl + proj1}/transaction/service/CreditLimitRequest`,
    dailySalesReport: `${baseUrl + proj1}/flight/service/DailySalesReport`,
    domainLogo: `${baseUrl + portProj3 + proj3}/master-data/domain-logo`,
    editProfile: `${baseUrl + proj1}/user/service/EditProfile`,
    emailVoucher: `${baseUrl + proj1}/voucher/service/EmailVoucher`,
    extraServices: `${baseUrl}/flight/service/ExtraServices`,
    eventNotfications: `${baseUrl + proj1}/transaction/service/EventNotfications`,
    fareRule: `${baseUrl}/flight/service/FareRule`,
    finalBooking: `${baseUrl}/flight/service/FinalBooking`,
    flightVoucher: `${baseUrl + proj1}/voucher/service/FlightVoucher`,
    forgotPassword: `${baseUrl + portProj3 + proj3}/user/service/forgotPassword`,
    latestTransactions: `${baseUrl + proj1}/transaction/service/LatestTransactions`,
    latestEventNotfications: `${baseUrl + proj1}/transaction/service/LatestEventNotfications`,
    moduleBookingCount: `${baseUrl + proj1}/transaction/service/ModuleBookingCount`,
    monthlyRecapReport: `${baseUrl + proj1}/transaction/service/MonthlyRecapReport`,
    registration: `${baseUrl + proj1}/user/service/Registration`,
    search: baseUrl + '/flight/service/Search',
    setBalanceAlert: `${baseUrl + proj1}/transaction/service/SetBalanceAlert`,
    transactionLogs: `${baseUrl + proj1}/transaction/service/TransactionLogs`,
    updateBalanceAlert: `${baseUrl + proj1}/transaction/service/UpdateBalanceAlert`,
    updateDomainLogo: `${baseUrl + proj1}/user/service/UpdateDomainLogo `,
    updateFareQuote: `${baseUrl}/flight/service/UpdateFareQuote`,
    updateMarkup: `${baseUrl + proj1}/voucher/service/UpdateMarkup`,
    userTitleList: baseUrl + '/supervision/user/service/UserTitleList',
    userLogin: `${baseUrl + portProj3 + proj3}/user/service/UserLogin`,
    updateProfile: `${baseUrl + proj1}/user/service/UpdateProfile`,
    userLogout: `${baseUrl + proj1}/user/service/UserLogout`,
    currencyList: `${baseUrl}/flight/service/CurrencyList`,
    currencyConversionRate: `${baseUrl}/flight/service/CurrencyConversionRate`,
    sendItinerary: `${baseUrl}/flight/service/SendItinerary`,

    fiveStarHotels: `${baseUrl + portProj4 + proj4}/hotel/availability/fiveStarHotels`,
};
