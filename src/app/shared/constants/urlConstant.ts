export const endpoints = {
    stateWise: 'data.json',
    stateDistrictWise: 'state_district_wise.json'
};

export const CovinPrimary = {
    location: 'admin/location',
    appointmentSession: 'appointment/sessions/public',
    vaccinationCert: 'registration/certificate/public/download'
};

export const CovinSecondary = {
    states: 'states',
    districts: 'districts',
    byPin: 'findByPin',
    byDistrict: 'findByDistrict',
    byPinFor7Days: 'calendarByPin',
    byDistrictFor7Days: 'calendarByDistrict',
};

export const RootnetPrimary = {
    history: 'history'
};
