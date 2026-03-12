// ─── Data Definitions ───
const COMMITTEES = [
    {
        id: 'unga',
        name: 'UNGA',
        portfolios: [
            { id: '1', name: 'Afghanistan', status: 'available' },
            { id: '2', name: 'Albania', status: 'available' },
            { id: '3', name: 'Algeria', status: 'available' },
            { id: '4', name: 'Andorra', status: 'available' },
            { id: '5', name: 'Angola', status: 'available' },
            { id: '6', name: 'Antigua and Barbuda', status: 'available' },
            { id: '7', name: 'Argentina', status: 'available' },
            { id: '8', name: 'Armenia', status: 'available' },
            { id: '9', name: 'Australia', status: 'available' },
            { id: '10', name: 'Austria', status: 'available' },
            { id: '11', name: 'Azerbaijan', status: 'available' },
            { id: '12', name: 'Bahamas', status: 'available' },
            { id: '13', name: 'Bahrain', status: 'available' },
            { id: '14', name: 'Bangladesh', status: 'available' },
            { id: '15', name: 'Barbados', status: 'available' },
            { id: '16', name: 'Belarus', status: 'available' },
            { id: '17', name: 'Belgium', status: 'available' },
            { id: '18', name: 'Belize', status: 'available' },
            { id: '19', name: 'Benin', status: 'available' },
            { id: '20', name: 'Bhutan', status: 'available' },
            { id: '21', name: 'Bolivia', status: 'available' },
            { id: '22', name: 'Bosnia and Herzegovina', status: 'available' },
            { id: '23', name: 'Botswana', status: 'available' },
            { id: '24', name: 'Brazil', status: 'available' },
            { id: '25', name: 'Brunei', status: 'available' },
            { id: '26', name: 'Bulgaria', status: 'available' },
            { id: '27', name: 'Burkina Faso', status: 'available' },
            { id: '28', name: 'Burundi', status: 'available' },
            { id: '29', name: 'Cabo Verde', status: 'available' },
            { id: '30', name: 'Cambodia', status: 'available' },
            { id: '31', name: 'Cameroon', status: 'available' },
            { id: '32', name: 'Canada', status: 'available' },
            { id: '33', name: 'Central African Republic', status: 'available' },
            { id: '34', name: 'Chad', status: 'available' },
            { id: '35', name: 'Chile', status: 'available' },
            { id: '36', name: 'China', status: 'available' },
            { id: '37', name: 'Colombia', status: 'available' },
            { id: '38', name: 'Comoros', status: 'available' },
            { id: '39', name: 'Congo', status: 'available' },
            { id: '40', name: 'Costa Rica', status: 'available' },
            { id: '41', name: 'Côte d’Ivoire', status: 'available' },
            { id: '42', name: 'Croatia', status: 'available' },
            { id: '43', name: 'Cuba', status: 'available' },
            { id: '44', name: 'Cyprus', status: 'available' },
            { id: '45', name: 'Czechia', status: 'available' },
            { id: '46', name: 'Democratic Republic of the Congo', status: 'available' },
            { id: '47', name: 'Denmark', status: 'available' },
            { id: '48', name: 'Djibouti', status: 'available' },
            { id: '49', name: 'Dominica', status: 'available' },
            { id: '50', name: 'Dominican Republic', status: 'available' },
            { id: '51', name: 'Ecuador', status: 'available' },
            { id: '52', name: 'Egypt', status: 'available' },
            { id: '53', name: 'El Salvador', status: 'available' },
            { id: '54', name: 'Equatorial Guinea', status: 'available' },
            { id: '55', name: 'Eritrea', status: 'available' },
            { id: '56', name: 'Estonia', status: 'available' },
            { id: '57', name: 'Eswatini', status: 'available' },
            { id: '58', name: 'Ethiopia', status: 'available' },
            { id: '59', name: 'Fiji', status: 'available' },
            { id: '60', name: 'Finland', status: 'available' },
            { id: '61', name: 'France', status: 'available' },
            { id: '62', name: 'Gabon', status: 'available' },
            { id: '63', name: 'Gambia', status: 'available' },
            { id: '64', name: 'Georgia', status: 'available' },
            { id: '65', name: 'Germany', status: 'available' },
            { id: '66', name: 'Ghana', status: 'available' },
            { id: '67', name: 'Greece', status: 'available' },
            { id: '68', name: 'Grenada', status: 'available' },
            { id: '69', name: 'Guatemala', status: 'available' },
            { id: '70', name: 'Guinea', status: 'available' },
            { id: '71', name: 'Guinea-Bissau', status: 'available' },
            { id: '72', name: 'Guyana', status: 'available' },
            { id: '73', name: 'Haiti', status: 'available' },
            { id: '74', name: 'Honduras', status: 'available' },
            { id: '75', name: 'Hungary', status: 'available' },
            { id: '76', name: 'Iceland', status: 'available' },
            { id: '77', name: 'India', status: 'available' },
            { id: '78', name: 'Indonesia', status: 'available' },
            { id: '79', name: 'Iran', status: 'available' },
            { id: '80', name: 'Iraq', status: 'available' },
            { id: '81', name: 'Ireland', status: 'available' },
            { id: '82', name: 'Israel', status: 'available' },
            { id: '83', name: 'Italy', status: 'available' },
            { id: '84', name: 'Jamaica', status: 'available' },
            { id: '85', name: 'Japan', status: 'available' },
            { id: '86', name: 'Jordan', status: 'available' },
            { id: '87', name: 'Kazakhstan', status: 'available' },
            { id: '88', name: 'Kenya', status: 'available' },
            { id: '89', name: 'Kiribati', status: 'available' },
            { id: '90', name: 'Kuwait', status: 'available' },
            { id: '91', name: 'Kyrgyzstan', status: 'available' },
            { id: '92', name: 'Laos', status: 'available' },
            { id: '93', name: 'Latvia', status: 'available' },
            { id: '94', name: 'Lebanon', status: 'available' },
            { id: '95', name: 'Lesotho', status: 'available' },
            { id: '96', name: 'Liberia', status: 'available' },
            { id: '97', name: 'Libya', status: 'available' },
            { id: '98', name: 'Liechtenstein', status: 'available' },
            { id: '99', name: 'Lithuania', status: 'available' },
            { id: '100', name: 'Luxembourg', status: 'available' },
            { id: '101', name: 'Madagascar', status: 'available' },
            { id: '102', name: 'Malawi', status: 'available' },
            { id: '103', name: 'Malaysia', status: 'available' },
            { id: '104', name: 'Maldives', status: 'available' },
            { id: '105', name: 'Mali', status: 'available' },
            { id: '106', name: 'Malta', status: 'available' },
            { id: '107', name: 'Marshall Islands', status: 'available' },
            { id: '108', name: 'Mauritania', status: 'available' },
            { id: '109', name: 'Mauritius', status: 'available' },
            { id: '110', name: 'Mexico', status: 'available' },
            { id: '111', name: 'Micronesia', status: 'available' },
            { id: '112', name: 'Moldova', status: 'available' },
            { id: '113', name: 'Monaco', status: 'available' },
            { id: '114', name: 'Mongolia', status: 'available' },
            { id: '115', name: 'Montenegro', status: 'available' },
            { id: '116', name: 'Morocco', status: 'available' },
            { id: '117', name: 'Mozambique', status: 'available' },
            { id: '118', name: 'Myanmar', status: 'available' },
            { id: '119', name: 'Namibia', status: 'available' },
            { id: '120', name: 'Nauru', status: 'available' },
            { id: '121', name: 'Nepal', status: 'available' },
            { id: '122', name: 'Netherlands', status: 'available' },
            { id: '123', name: 'New Zealand', status: 'available' },
            { id: '124', name: 'Nicaragua', status: 'available' },
            { id: '125', name: 'Niger', status: 'available' },
            { id: '126', name: 'Nigeria', status: 'available' },
            { id: '127', name: 'North Korea', status: 'available' },
            { id: '128', name: 'North Macedonia', status: 'available' },
            { id: '129', name: 'Norway', status: 'available' },
            { id: '130', name: 'Oman', status: 'available' },
            { id: '131', name: 'Pakistan', status: 'available' },
            { id: '132', name: 'Palau', status: 'available' },
            { id: '133', name: 'Panama', status: 'available' },
            { id: '134', name: 'Papua New Guinea', status: 'available' },
            { id: '135', name: 'Paraguay', status: 'available' },
            { id: '136', name: 'Peru', status: 'available' },
            { id: '137', name: 'Philippines', status: 'available' },
            { id: '138', name: 'Poland', status: 'available' },
            { id: '139', name: 'Portugal', status: 'available' },
            { id: '140', name: 'Qatar', status: 'available' },
            { id: '141', name: 'Romania', status: 'available' },
            { id: '142', name: 'Russia', status: 'available' },
            { id: '143', name: 'Rwanda', status: 'available' },
            { id: '144', name: 'Saint Kitts and Nevis', status: 'available' },
            { id: '145', name: 'Saint Lucia', status: 'available' },
            { id: '146', name: 'Saint Vincent and the Grenadines', status: 'available' },
            { id: '147', name: 'Samoa', status: 'available' },
            { id: '148', name: 'San Marino', status: 'available' },
            { id: '149', name: 'Sao Tome and Principe', status: 'available' },
            { id: '150', name: 'Saudi Arabia', status: 'available' },
            { id: '151', name: 'Senegal', status: 'available' },
            { id: '152', name: 'Serbia', status: 'available' },
            { id: '153', name: 'Seychelles', status: 'available' },
            { id: '154', name: 'Sierra Leone', status: 'available' },
            { id: '155', name: 'Singapore', status: 'available' },
            { id: '156', name: 'Slovakia', status: 'available' },
            { id: '157', name: 'Slovenia', status: 'available' },
            { id: '158', name: 'Solomon Islands', status: 'available' },
            { id: '159', name: 'Somalia', status: 'available' },
            { id: '160', name: 'South Africa', status: 'available' },
            { id: '161', name: 'South Sudan', status: 'available' },
            { id: '162', name: 'Spain', status: 'available' },
            { id: '163', name: 'Sri Lanka', status: 'available' },
            { id: '164', name: 'Sudan', status: 'available' },
            { id: '165', name: 'Suriname', status: 'available' },
            { id: '166', name: 'Sweden', status: 'available' },
            { id: '167', name: 'Switzerland', status: 'available' },
            { id: '168', name: 'Syria', status: 'available' },
            { id: '169', name: 'Tajikistan', status: 'available' },
            { id: '170', name: 'Tanzania', status: 'available' },
            { id: '171', name: 'Thailand', status: 'available' },
            { id: '172', name: 'Timor-Leste', status: 'available' },
            { id: '173', name: 'Togo', status: 'available' },
            { id: '174', name: 'Tonga', status: 'available' },
            { id: '175', name: 'Trinidad and Tobago', status: 'available' },
            { id: '176', name: 'Tunisia', status: 'available' },
            { id: '177', name: 'Turkey', status: 'available' },
            { id: '178', name: 'Turkmenistan', status: 'available' },
            { id: '179', name: 'Tuvalu', status: 'available' },
            { id: '180', name: 'Uganda', status: 'available' },
            { id: '181', name: 'Ukraine', status: 'available' },
            { id: '182', name: 'United Arab Emirates', status: 'available' },
            { id: '183', name: 'United Kingdom', status: 'available' },
            { id: '184', name: 'United States', status: 'available' },
            { id: '185', name: 'Uruguay', status: 'available' },
            { id: '186', name: 'Uzbekistan', status: 'available' },
            { id: '187', name: 'Vanuatu', status: 'available' },
            { id: '188', name: 'Venezuela', status: 'available' },
            { id: '189', name: 'Vietnam', status: 'available' },
            { id: '190', name: 'Yemen', status: 'available' },
            { id: '191', name: 'Zambia', status: 'available' },
            { id: '192', name: 'Zimbabwe', status: 'available' }
        ]
    },
    {
        id: 'uncsw',
        name: 'UNCSW',
        portfolios: [
            { id: '1', name: 'Angola', status: 'available' },
            { id: '2', name: 'Burkina Faso', status: 'available' },
            { id: '3', name: 'Cameroon', status: 'available' },
            { id: '4', name: 'Chad', status: 'available' },
            { id: '5', name: 'Comoros', status: 'available' },
            { id: '6', name: 'Congo', status: 'available' },
            { id: '7', name: 'Côte d’Ivoire', status: 'available' },
            { id: '8', name: 'Equatorial Guinea', status: 'available' },
            { id: '9', name: 'Kenya', status: 'available' },
            { id: '10', name: 'Liberia', status: 'available' },
            { id: '11', name: 'Madagascar', status: 'available' },
            { id: '12', name: 'Niger', status: 'available' },
            { id: '13', name: 'United Republic of Tanzania', status: 'available' },
            { id: '14', name: 'Bangladesh', status: 'available' },
            { id: '15', name: 'China', status: 'available' },
            { id: '16', name: 'India', status: 'available' },
            { id: '17', name: 'Indonesia', status: 'available' },
            { id: '18', name: 'Iran', status: 'available' },
            { id: '19', name: 'Japan', status: 'available' },
            { id: '20', name: 'Lebanon', status: 'available' },
            { id: '21', name: 'Mongolia', status: 'available' },
            { id: '22', name: 'Pakistan', status: 'available' },
            { id: '23', name: 'Philippines', status: 'available' },
            { id: '24', name: 'Saudi Arabia', status: 'available' },
            { id: '25', name: 'Argentina', status: 'available' },
            { id: '26', name: 'Bolivia', status: 'available' },
            { id: '27', name: 'Brazil', status: 'available' },
            { id: '28', name: 'Colombia', status: 'available' },
            { id: '29', name: 'Cuba', status: 'available' },
            { id: '30', name: 'Dominican Republic', status: 'available' },
            { id: '31', name: 'El Salvador', status: 'available' },
            { id: '32', name: 'Mexico', status: 'available' },
            { id: '33', name: 'Paraguay', status: 'available' },
            { id: '34', name: 'Austria', status: 'available' },
            { id: '35', name: 'Belgium', status: 'available' },
            { id: '36', name: 'Canada', status: 'available' },
            { id: '37', name: 'France', status: 'available' },
            { id: '38', name: 'Germany', status: 'available' },
            { id: '39', name: 'Italy', status: 'available' },
            { id: '40', name: 'Sweden', status: 'available' },
            { id: '41', name: 'United States', status: 'available' },
            { id: '42', name: 'Armenia', status: 'available' },
            { id: '43', name: 'Poland', status: 'available' },
            { id: '44', name: 'Romania', status: 'available' },
            { id: '45', name: 'Russian Federation', status: 'available' }
        ]
    },
    {
        id: 'unhrc',
        name: 'UNHRC',
        portfolios: [
            { id: '1', name: 'Algeria', status: 'available' },
            { id: '2', name: 'Benin', status: 'available' },
            { id: '3', name: 'Burundi', status: 'available' },
            { id: '4', name: 'Cameroon', status: 'available' },
            { id: '5', name: 'Côte d’Ivoire', status: 'available' },
            { id: '6', name: 'Eritrea', status: 'available' },
            { id: '7', name: 'Gambia', status: 'available' },
            { id: '8', name: 'Ghana', status: 'available' },
            { id: '9', name: 'Kenya', status: 'available' },
            { id: '10', name: 'Malawi', status: 'available' },
            { id: '11', name: 'Morocco', status: 'available' },
            { id: '12', name: 'Somalia', status: 'available' },
            { id: '13', name: 'South Africa', status: 'available' },
            { id: '14', name: 'Bangladesh', status: 'available' },
            { id: '15', name: 'China', status: 'available' },
            { id: '16', name: 'Indonesia', status: 'available' },
            { id: '17', name: 'Japan', status: 'available' },
            { id: '18', name: 'Kuwait', status: 'available' },
            { id: '19', name: 'Kyrgyzstan', status: 'available' },
            { id: '20', name: 'Maldives', status: 'available' },
            { id: '21', name: 'Pakistan', status: 'available' },
            { id: '22', name: 'Qatar', status: 'available' },
            { id: '23', name: 'Republic of Korea (South Korea)', status: 'available' },
            { id: '24', name: 'Thailand', status: 'available' },
            { id: '25', name: 'United Arab Emirates', status: 'available' },
            { id: '26', name: 'Vietnam', status: 'available' },
            { id: '27', name: 'Albania', status: 'available' },
            { id: '28', name: 'Bulgaria', status: 'available' },
            { id: '29', name: 'Czechia', status: 'available' },
            { id: '30', name: 'Georgia', status: 'available' },
            { id: '31', name: 'Romania', status: 'available' },
            { id: '32', name: 'Ukraine', status: 'available' },
            { id: '33', name: 'Argentina', status: 'available' },
            { id: '34', name: 'Bolivia', status: 'available' },
            { id: '35', name: 'Brazil', status: 'available' },
            { id: '36', name: 'Chile', status: 'available' },
            { id: '37', name: 'Colombia', status: 'available' },
            { id: '38', name: 'Costa Rica', status: 'available' },
            { id: '39', name: 'Cuba', status: 'available' },
            { id: '40', name: 'Dominican Republic', status: 'available' },
            { id: '41', name: 'Belgium', status: 'available' },
            { id: '42', name: 'Finland', status: 'available' },
            { id: '43', name: 'France', status: 'available' },
            { id: '44', name: 'Germany', status: 'available' },
            { id: '45', name: 'Luxembourg', status: 'available' },
            { id: '46', name: 'Netherlands', status: 'available' },
            { id: '47', name: 'United Kingdom', status: 'available' }
        ]
    },
    {
        id: 'who',
        name: 'WHO',
        portfolios: [
            { id: '1', name: 'Afghanistan', status: 'available' },
            { id: '2', name: 'Albania', status: 'available' },
            { id: '3', name: 'Algeria', status: 'available' },
            { id: '4', name: 'Andorra', status: 'available' },
            { id: '5', name: 'Angola', status: 'available' },
            { id: '6', name: 'Antigua and Barbuda', status: 'available' },
            { id: '7', name: 'Argentina', status: 'available' },
            { id: '8', name: 'Armenia', status: 'available' },
            { id: '9', name: 'Australia', status: 'available' },
            { id: '10', name: 'Austria', status: 'available' },
            { id: '11', name: 'Azerbaijan', status: 'available' },
            { id: '12', name: 'Bahamas', status: 'available' },
            { id: '13', name: 'Bahrain', status: 'available' },
            { id: '14', name: 'Bangladesh', status: 'available' },
            { id: '15', name: 'Barbados', status: 'available' },
            { id: '16', name: 'Belarus', status: 'available' },
            { id: '17', name: 'Belgium', status: 'available' },
            { id: '18', name: 'Belize', status: 'available' },
            { id: '19', name: 'Benin', status: 'available' },
            { id: '20', name: 'Bhutan', status: 'available' },
            { id: '21', name: 'Bolivia', status: 'available' },
            { id: '22', name: 'Bosnia and Herzegovina', status: 'available' },
            { id: '23', name: 'Botswana', status: 'available' },
            { id: '24', name: 'Brazil', status: 'available' },
            { id: '25', name: 'Brunei', status: 'available' },
            { id: '26', name: 'Bulgaria', status: 'available' },
            { id: '27', name: 'Burkina Faso', status: 'available' },
            { id: '28', name: 'Burundi', status: 'available' },
            { id: '29', name: 'Cabo Verde', status: 'available' },
            { id: '30', name: 'Cambodia', status: 'available' },
            { id: '31', name: 'Cameroon', status: 'available' },
            { id: '32', name: 'Canada', status: 'available' },
            { id: '33', name: 'Central African Republic', status: 'available' },
            { id: '34', name: 'Chad', status: 'available' },
            { id: '35', name: 'Chile', status: 'available' },
            { id: '36', name: 'China', status: 'available' },
            { id: '37', name: 'Colombia', status: 'available' },
            { id: '38', name: 'Comoros', status: 'available' },
            { id: '39', name: 'Congo', status: 'available' },
            { id: '40', name: 'Costa Rica', status: 'available' },
            { id: '41', name: 'Côte d’Ivoire', status: 'available' },
            { id: '42', name: 'Croatia', status: 'available' },
            { id: '43', name: 'Cuba', status: 'available' },
            { id: '44', name: 'Cyprus', status: 'available' },
            { id: '45', name: 'Czechia', status: 'available' },
            { id: '46', name: 'Democratic Republic of the Congo', status: 'available' },
            { id: '47', name: 'Denmark', status: 'available' },
            { id: '48', name: 'Djibouti', status: 'available' },
            { id: '49', name: 'Dominica', status: 'available' },
            { id: '50', name: 'Dominican Republic', status: 'available' },
            { id: '51', name: 'Ecuador', status: 'available' },
            { id: '52', name: 'Egypt', status: 'available' },
            { id: '53', name: 'El Salvador', status: 'available' },
            { id: '54', name: 'Equatorial Guinea', status: 'available' },
            { id: '55', name: 'Eritrea', status: 'available' },
            { id: '56', name: 'Estonia', status: 'available' },
            { id: '57', name: 'Eswatini', status: 'available' },
            { id: '58', name: 'Ethiopia', status: 'available' },
            { id: '59', name: 'Fiji', status: 'available' },
            { id: '60', name: 'Finland', status: 'available' },
            { id: '61', name: 'France', status: 'available' },
            { id: '62', name: 'Gabon', status: 'available' },
            { id: '63', name: 'Gambia', status: 'available' },
            { id: '64', name: 'Georgia', status: 'available' },
            { id: '65', name: 'Germany', status: 'available' },
            { id: '66', name: 'Ghana', status: 'available' },
            { id: '67', name: 'Greece', status: 'available' },
            { id: '68', name: 'Grenada', status: 'available' },
            { id: '69', name: 'Guatemala', status: 'available' },
            { id: '70', name: 'Guinea', status: 'available' },
            { id: '71', name: 'Guinea-Bissau', status: 'available' },
            { id: '72', name: 'Guyana', status: 'available' },
            { id: '73', name: 'Haiti', status: 'available' },
            { id: '74', name: 'Honduras', status: 'available' },
            { id: '75', name: 'Hungary', status: 'available' },
            { id: '76', name: 'Iceland', status: 'available' },
            { id: '77', name: 'India', status: 'available' },
            { id: '78', name: 'Indonesia', status: 'available' },
            { id: '79', name: 'Iran', status: 'available' },
            { id: '80', name: 'Iraq', status: 'available' },
            { id: '81', name: 'Ireland', status: 'available' },
            { id: '82', name: 'Israel', status: 'available' },
            { id: '83', name: 'Italy', status: 'available' },
            { id: '84', name: 'Jamaica', status: 'available' },
            { id: '85', name: 'Japan', status: 'available' },
            { id: '86', name: 'Jordan', status: 'available' },
            { id: '87', name: 'Kazakhstan', status: 'available' },
            { id: '88', name: 'Kenya', status: 'available' },
            { id: '89', name: 'Kiribati', status: 'available' },
            { id: '90', name: 'Kuwait', status: 'available' },
            { id: '91', name: 'Kyrgyzstan', status: 'available' },
            { id: '92', name: 'Laos', status: 'available' },
            { id: '93', name: 'Latvia', status: 'available' },
            { id: '94', name: 'Lebanon', status: 'available' },
            { id: '95', name: 'Lesotho', status: 'available' },
            { id: '96', name: 'Liberia', status: 'available' },
            { id: '97', name: 'Libya', status: 'available' },
            { id: '98', name: 'Liechtenstein', status: 'available' },
            { id: '99', name: 'Lithuania', status: 'available' },
            { id: '100', name: 'Luxembourg', status: 'available' },
            { id: '101', name: 'Madagascar', status: 'available' },
            { id: '102', name: 'Malawi', status: 'available' },
            { id: '103', name: 'Malaysia', status: 'available' },
            { id: '104', name: 'Maldives', status: 'available' },
            { id: '105', name: 'Mali', status: 'available' },
            { id: '106', name: 'Malta', status: 'available' },
            { id: '107', name: 'Marshall Islands', status: 'available' },
            { id: '108', name: 'Mauritania', status: 'available' },
            { id: '109', name: 'Mauritius', status: 'available' },
            { id: '110', name: 'Mexico', status: 'available' },
            { id: '111', name: 'Micronesia', status: 'available' },
            { id: '112', name: 'Moldova', status: 'available' },
            { id: '113', name: 'Monaco', status: 'available' },
            { id: '114', name: 'Mongolia', status: 'available' },
            { id: '115', name: 'Montenegro', status: 'available' },
            { id: '116', name: 'Morocco', status: 'available' },
            { id: '117', name: 'Mozambique', status: 'available' },
            { id: '118', name: 'Myanmar', status: 'available' },
            { id: '119', name: 'Namibia', status: 'available' },
            { id: '120', name: 'Nauru', status: 'available' },
            { id: '121', name: 'Nepal', status: 'available' },
            { id: '122', name: 'Netherlands', status: 'available' },
            { id: '123', name: 'New Zealand', status: 'available' },
            { id: '124', name: 'Nicaragua', status: 'available' },
            { id: '125', name: 'Niger', status: 'available' },
            { id: '126', name: 'Nigeria', status: 'available' },
            { id: '127', name: 'North Korea', status: 'available' },
            { id: '128', name: 'North Macedonia', status: 'available' },
            { id: '129', name: 'Norway', status: 'available' },
            { id: '130', name: 'Oman', status: 'available' },
            { id: '131', name: 'Pakistan', status: 'available' },
            { id: '132', name: 'Palau', status: 'available' },
            { id: '133', name: 'Panama', status: 'available' },
            { id: '134', name: 'Papua New Guinea', status: 'available' },
            { id: '135', name: 'Paraguay', status: 'available' },
            { id: '136', name: 'Peru', status: 'available' },
            { id: '137', name: 'Philippines', status: 'available' },
            { id: '138', name: 'Poland', status: 'available' },
            { id: '139', name: 'Portugal', status: 'available' },
            { id: '140', name: 'Qatar', status: 'available' },
            { id: '141', name: 'Romania', status: 'available' },
            { id: '142', name: 'Russia', status: 'available' },
            { id: '143', name: 'Rwanda', status: 'available' },
            { id: '144', name: 'Saint Kitts and Nevis', status: 'available' },
            { id: '145', name: 'Saint Lucia', status: 'available' },
            { id: '146', name: 'Saint Vincent and the Grenadines', status: 'available' },
            { id: '147', name: 'Samoa', status: 'available' },
            { id: '148', name: 'San Marino', status: 'available' },
            { id: '149', name: 'Sao Tome and Principe', status: 'available' },
            { id: '150', name: 'Saudi Arabia', status: 'available' },
            { id: '151', name: 'Senegal', status: 'available' },
            { id: '152', name: 'Serbia', status: 'available' },
            { id: '153', name: 'Seychelles', status: 'available' },
            { id: '154', name: 'Sierra Leone', status: 'available' },
            { id: '155', name: 'Singapore', status: 'available' },
            { id: '156', name: 'Slovakia', status: 'available' },
            { id: '157', name: 'Slovenia', status: 'available' },
            { id: '158', name: 'Solomon Islands', status: 'available' },
            { id: '159', name: 'Somalia', status: 'available' },
            { id: '160', name: 'South Africa', status: 'available' },
            { id: '161', name: 'South Sudan', status: 'available' },
            { id: '162', name: 'Spain', status: 'available' },
            { id: '163', name: 'Sri Lanka', status: 'available' },
            { id: '164', name: 'Sudan', status: 'available' },
            { id: '165', name: 'Suriname', status: 'available' },
            { id: '166', name: 'Sweden', status: 'available' },
            { id: '167', name: 'Switzerland', status: 'available' },
            { id: '168', name: 'Syria', status: 'available' },
            { id: '169', name: 'Tajikistan', status: 'available' },
            { id: '170', name: 'Tanzania', status: 'available' },
            { id: '171', name: 'Thailand', status: 'available' },
            { id: '172', name: 'Timor-Leste', status: 'available' },
            { id: '173', name: 'Togo', status: 'available' },
            { id: '174', name: 'Tonga', status: 'available' },
            { id: '175', name: 'Trinidad and Tobago', status: 'available' },
            { id: '176', name: 'Tunisia', status: 'available' },
            { id: '177', name: 'Turkey', status: 'available' },
            { id: '178', name: 'Turkmenistan', status: 'available' },
            { id: '179', name: 'Tuvalu', status: 'available' },
            { id: '180', name: 'Uganda', status: 'available' },
            { id: '181', name: 'Ukraine', status: 'available' },
            { id: '182', name: 'United Arab Emirates', status: 'available' },
            { id: '183', name: 'United Kingdom', status: 'available' },
            { id: '184', name: 'United States', status: 'available' },
            { id: '185', name: 'Uruguay', status: 'available' },
            { id: '186', name: 'Uzbekistan', status: 'available' },
            { id: '187', name: 'Vanuatu', status: 'available' },
            { id: '188', name: 'Venezuela', status: 'available' },
            { id: '189', name: 'Vietnam', status: 'available' },
            { id: '190', name: 'Yemen', status: 'available' },
            { id: '191', name: 'Zambia', status: 'available' },
            { id: '192', name: 'Zimbabwe', status: 'available' }
        ]
    },
    {
        id: 'aippm',
        name: 'AIPPM',
        portfolios: [
            { id: '1', name: 'Narendra Modi', position: 'Prime Minister', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '2', name: 'Rajnath Singh', position: 'Defence Minister', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '3', name: 'Amit Shah', position: 'Home Minister', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '4', name: 'Nirmala Sitharaman', position: 'Finance Minister', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '5', name: 'S. Jaishankar', position: 'External Affairs Minister', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '6', name: 'Nitin Gadkari', position: 'Minister for Road Transport and Highways', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '7', name: 'Piyush Goyal', position: 'Minister of Commerce and Industry', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '8', name: 'Ashwini Vaishnaw', position: 'Minister of Railways, Communications and IT', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '9', name: 'Dharmendra Pradhan', position: 'Minister of Education', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '10', name: 'Hardeep Singh Puri', position: 'Minister of Petroleum and Natural Gas', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '11', name: 'Jyotiraditya Scindia', position: 'Minister of Civil Aviation', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '12', name: 'Sarbananda Sonowal', position: 'Minister of Ports, Shipping and Waterways', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '13', name: 'Gajendra Singh Shekhawat', position: 'Minister of Jal Shakti', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '14', name: 'Bhupender Yadav', position: 'Minister of Environment, Forest and Climate Change', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '15', name: 'Mansukh Mandaviya', position: 'Minister of Labour and Employment', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '16', name: 'Kiren Rijiju', position: 'Minister of Parliamentary Affairs', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '17', name: 'J. P. Nadda', position: 'National President', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '18', name: 'Rahul Gandhi', position: 'Member of Parliament', party: 'Indian National Congress (INC)', status: 'available' },
            { id: '19', name: 'Mallikarjun Kharge', position: 'Leader of Opposition (Rajya Sabha)', party: 'Indian National Congress (INC)', status: 'available' },
            { id: '20', name: 'Shashi Tharoor', position: 'Member of Parliament', party: 'Indian National Congress (INC)', status: 'available' },
            { id: '21', name: 'Adhir Ranjan Chowdhury', position: 'Senior Leader', party: 'Indian National Congress (INC)', status: 'available' },
            { id: '22', name: 'Arvind Kejriwal', position: 'National Convenor', party: 'Aam Aadmi Party (AAP)', status: 'available' },
            { id: '23', name: 'Atishi', position: 'Chief Minister of Delhi', party: 'Aam Aadmi Party (AAP)', status: 'available' },
            { id: '24', name: 'Mamata Banerjee', position: 'Chief Minister of West Bengal', party: 'All India Trinamool Congress (TMC)', status: 'available' },
            { id: '25', name: 'Akhilesh Yadav', position: 'Party President', party: 'Samajwadi Party (SP)', status: 'available' },
            { id: '26', name: 'Tejashwi Yadav', position: 'Leader', party: 'Rashtriya Janata Dal (RJD)', status: 'available' },
            { id: '27', name: 'Nitish Kumar', position: 'Chief Minister of Bihar', party: 'Janata Dal (United)', status: 'available' },
            { id: '28', name: 'Uddhav Thackeray', position: 'Party Chief', party: 'Shiv Sena (UBT)', status: 'available' },
            { id: '29', name: 'Eknath Shinde', position: 'Chief Minister of Maharashtra', party: 'Shiv Sena', status: 'available' },
            { id: '30', name: 'Devendra Fadnavis', position: 'Deputy Chief Minister of Maharashtra', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '31', name: 'Yogi Adityanath', position: 'Chief Minister of Uttar Pradesh', party: 'Bharatiya Janata Party (BJP)', status: 'available' },
            { id: '32', name: 'K. Chandrashekar Rao', position: 'Party President', party: 'Bharat Rashtra Samithi (BRS)', status: 'available' },
            { id: '33', name: 'M. K. Stalin', position: 'Chief Minister of Tamil Nadu', party: 'Dravida Munnetra Kazhagam (DMK)', status: 'available' },
            { id: '34', name: 'Pinarayi Vijayan', position: 'Chief Minister of Kerala', party: 'Communist Party of India (Marxist)', status: 'available' },
            { id: '35', name: 'Chirag Paswan', position: 'Party President', party: 'Lok Janshakti Party (Ram Vilas)', status: 'available' },
            { id: '36', name: 'Asaduddin Owaisi', position: 'Party President', party: 'All India Majlis-e-Ittehadul Muslimeen (AIMIM)', status: 'available' },
            { id: '37', name: 'Sukhbir Singh Badal', position: 'Party President', party: 'Shiromani Akali Dal (SAD)', status: 'available' },
            { id: '38', name: 'Hemant Soren', position: 'Chief Minister of Jharkhand', party: 'Jharkhand Mukti Morcha (JMM)', status: 'available' }
        ]
    },
    {
        id: 'ip',
        name: 'International Press (IP)',
        portfolios: [
            { id: '33', name: 'Reuters', status: 'available' },
            { id: '34', name: 'Al Jazeera', status: 'taken' },
            { id: '35', name: 'BBC News', status: 'available' },
            { id: '36', name: 'CNN', status: 'available' },
            { id: '37', name: 'The Hindu', status: 'available' },
            { id: '38', name: 'New York Times', status: 'taken' }
        ]
    }
];

const container = document.getElementById('committees-container');
const submitBtn = document.getElementById('mun-submit-btn');
const countDisplay = document.getElementById('select-count');
const statusBadge = document.querySelector('.selection-status');

// Track selected portfolios. Max 2.
// Format: [{ committeeId, portfolioId, portfolioName }]
let selectedPortfolios = [];

// ─── Render Committees ───
function render() {
    container.innerHTML = '';

    COMMITTEES.forEach(com => {
        const group = document.createElement('div');
        group.className = 'committee-group';
        group.id = `group-${com.id}`;

        // Check if user has selected a portfolio in this committee
        const isSelectedHere = selectedPortfolios.some(p => p.committeeId === com.id);
        if (isSelectedHere) {
            group.classList.add('has-selection');
        }

        // Header
        const header = document.createElement('div');
        header.className = 'committee-header';
        header.innerHTML = `
            <div class="committee-title">
                ${com.name}
                <span class="selected-badge">Selected</span>
            </div>
            <svg class="expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;

        // Toggle expand/collapse
        header.addEventListener('click', () => {
            const isExpanded = group.classList.contains('expanded');
            // Close all others
            document.querySelectorAll('.committee-group').forEach(g => g.classList.remove('expanded'));
            if (!isExpanded) {
                group.classList.add('expanded');
            }
        });

        // Portfolios List
        const list = document.createElement('div');
        list.className = 'portfolio-list';

        com.portfolios.forEach(port => {
            const isTaken = port.status === 'taken';
            const isChecked = selectedPortfolios.some(p => p.portfolioId === port.id);
            const item = document.createElement('div');
            item.className = `portfolio-item ${isTaken ? 'taken' : ''}`;

            const idStr = `port-${com.id}-${port.id}`;

            const statusClass = isTaken ? 'status-taken' : 'status-available';
            const statusText = isTaken ? 'Taken' : 'Available';

            const hasExtraInfo = port.position || port.party;
            const extraInfoHtml = hasExtraInfo ? `
                <div class="portfolio-details">
                    ${port.position ? `<span class="portfolio-position">${port.position}</span>` : ''}
                    ${port.party ? `<span class="portfolio-party">${port.party}</span>` : ''}
                </div>
            ` : '';

            item.innerHTML = `
                <input type="checkbox" id="${idStr}" value="${port.id}" ${isChecked ? 'checked' : ''} ${isTaken ? 'disabled' : ''}>
                <label for="${idStr}">
                    <div class="portfolio-info">
                        <span class="portfolio-name">${port.name}</span>
                        ${extraInfoHtml}
                    </div>
                    <span class="status-indicator ${statusClass}">${statusText}</span>
                </label>
            `;

            if (!isTaken) {
                const input = item.querySelector('input');
                input.addEventListener('change', (e) => {
                    handleSelectionChange(e.target.checked, com.id, com.name, port.id, port.name, input);
                });
            }

            list.appendChild(item);
        });

        group.appendChild(header);
        group.appendChild(list);
        container.appendChild(group);
    });

    updateUIState();
}

// ─── Selection Logic ───
function handleSelectionChange(isChecked, comId, comName, portId, portName, inputEl) {
    if (isChecked) {
        // Collect current stats
        const currentInCom = selectedPortfolios.filter(p => p.committeeId === comId).length;
        const uniqueComIds = [...new Set(selectedPortfolios.map(p => p.committeeId))];
        const isNewCom = !uniqueComIds.includes(comId);

        // Rule 1: Max 2 committees
        if (isNewCom && uniqueComIds.length >= 2) {
            alert('You can only select portfolios from 2 committees in total.');
            inputEl.checked = false;
            return;
        }

        // Rule 2: Max 2 portfolios per committee
        if (currentInCom >= 2) {
            alert(`You can only select 2 portfolios from ${comName}.`);
            inputEl.checked = false;
            return;
        }

        // Rule 3: Max 4 portfolios total
        if (selectedPortfolios.length >= 4) {
            alert('You can only select exactly 4 portfolios in total.');
            inputEl.checked = false;
            return;
        }

        selectedPortfolios.push({
            committeeId: comId,
            committeeName: comName,
            portfolioId: portId,
            portfolioName: portName,
            position: COMMITTEE_DATA?.portfolios?.find(p => p.id === portId)?.position || null,
            party: COMMITTEE_DATA?.portfolios?.find(p => p.id === portId)?.party || null
        });
    } else {
        selectedPortfolios = selectedPortfolios.filter(p => p.portfolioId !== portId);
    }

    render(); // Re-render to update badges and checked states
}

function updateUIState() {
    const count = selectedPortfolios.length;
    countDisplay.textContent = count;

    if (count === 4) {
        statusBadge.classList.add('complete');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Continue to Personal Details →';
    } else {
        statusBadge.classList.remove('complete');
        submitBtn.disabled = true;
        submitBtn.textContent = `Select ${4 - count} more...`;
    }
}

// ─── Submission ───
submitBtn.addEventListener('click', () => {
    if (selectedPortfolios.length !== 4) return;

    // Save MUN selection
    sessionStorage.setItem('nydc_mun_selection', JSON.stringify(selectedPortfolios));
    
    // Redirect to selection.html for the final review/submission
    // Since MUN is a solo event, they won't add team members, but selection.html has the final Firebase submit button.
    window.location.href = 'selection.html';
});

// Init
render();
