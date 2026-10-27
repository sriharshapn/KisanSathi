export interface DistrictCentroid {
  district: string;
  state: string;
  lat: number;
  lon: number;
}

export const STATE_DISTRICTS: Record<string, string[]> = {
  'Karnataka': [
    'Ballari', 'Kolar', 'Chikkaballapur', 'Bengaluru Urban', 'Bengaluru Rural',
    'Belagavi', 'Mysuru', 'Davanagere', 'Dharwad', 'Mandya', 'Hassan',
    'Shivamogga', 'Haveri', 'Tumakuru', 'Bagalkote', 'Vijayapura',
    'Kalaburagi', 'Raichur', 'Koppal', 'Yadgir', 'Chitradurga', 'Gadag',
    'Udupi', 'Dakshina Kannada', 'Uttara Kannada', 'Kodagu', 'Chamarajanagar',
    'Ramanagara', 'Chikkamagaluru', 'Bidar', 'Vijayanagara'
  ],
  'Maharashtra': [
    'Nashik', 'Pune', 'Ahmednagar', 'Solapur', 'Kolhapur', 'Satara', 'Sangli',
    'Jalgaon', 'Dhule', 'Chhatrapati Sambhajinagar', 'Jalna', 'Parbhani',
    'Beed', 'Nanded', 'Dharashiv', 'Latur', 'Buldhana', 'Akola', 'Washim',
    'Amravati', 'Yavatmal', 'Wardha', 'Nagpur', 'Bhandara', 'Gondia',
    'Chandrapur', 'Gadchiroli', 'Nandurbar', 'Raigad', 'Ratnagiri', 'Sindhudurg', 'Thane', 'Palghar'
  ],
  'Punjab': [
    'Ludhiana', 'Jalandhar', 'Amritsar', 'Patiala', 'Bathinda', 'Sangrur',
    'Firozpur', 'Fazilka', 'Gurdaspur', 'Hoshiarpur', 'Kapurthala', 'Mansa',
    'Moga', 'Muktsar', 'Shaheed Bhagat Singh Nagar', 'Rupnagar', 'SAS Nagar (Mohali)',
    'Tarn Taran', 'Barnala', 'Fatehgarh Sahib', 'Faridkot', 'Malerkotla', 'Pathankot'
  ],
  'Tamil Nadu': [
    'Thanjavur', 'Tiruvarur', 'Nagapattinam', 'Madurai', 'Coimbatore',
    'Tiruchirappalli', 'Salem', 'Erode', 'Tirunelveli', 'Dindigul', 'Theni',
    'Virudhunagar', 'Cuddalore', 'Villupuram', 'Vellore', 'Tiruvannamalai',
    'Kanchipuram', 'Tiruvallur', 'Dharmapuri', 'Krishnagiri', 'Namakkal',
    'Karur', 'Perambalur', 'Pudukkottai', 'Sivaganga', 'Ramanathapuram',
    'Thoothukudi', 'Kanyakumari', 'Tiruppur', 'Ranipet', 'Tenkasi', 'Mayiladuthurai'
  ],
  'Andhra Pradesh': [
    'Guntur', 'Kurnool', 'Krishna', 'West Godavari', 'East Godavari',
    'Anantapur', 'Chittoor', 'YSR Kadapa', 'Prakasam', 'SPSR Nellore',
    'Visakhapatnam', 'Vizianagaram', 'Srikakulam', 'Bapatla', 'Palnadu',
    'Nandyal', 'Eluru', 'Kakinada', 'Konaseema', 'Anakapalli', 'Alluri Sitharama Raju',
    'Parvathipuram Manyam', 'Sri Sathya Sai', 'Annamayya', 'Tirupati'
  ],
  'Telangana': [
    'Warangal', 'Karimnagar', 'Nalgonda', 'Khammam', 'Nizamabad',
    'Mahabubnagar', 'Medak', 'Rangareddy', 'Adilabad', 'Sangareddy',
    'Siddipet', 'Suryapet', 'Jagtial', 'Peddapalli', 'Kamareddy',
    'Mancherial', 'Nirmal', 'Kumuram Bheem Asifabad', 'Bhadradri Kothagudem',
    'Mahabubabad', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal',
    'Wanaparthy', 'Nagarkurnool', 'Narayanpet', 'Vikarabad', 'Medchal Malkajgiri', 'Hyderabad'
  ],
  'Uttar Pradesh': [
    'Agra', 'Aligarh', 'Mathura', 'Meerut', 'Muzaffarnagar', 'Saharanpur',
    'Bareilly', 'Moradabad', 'Kanpur Nagar', 'Lucknow', 'Varanasi',
    'Prayagraj', 'Gorakhpur', 'Jhansi', 'Barabanki', 'Ayodhya', 'Basti',
    'Hardoi', 'Lakhimpur Kheri', 'Sitapur', 'Bulandshahr', 'Firozabad',
    'Mainpuri', 'Etah', 'Badaun', 'Shahjahanpur', 'Pilibhit', 'Rampur',
    'Bijnor', 'Amroha', 'Sambhal', 'Hathras', 'Kasganj', 'Farrukhabad',
    'Kannauj', 'Etawah', 'Auraiya', 'Kanpur Dehat', 'Unnao', 'Rae Bareli',
    'Amethi', 'Sultanpur', 'Fatehpur', 'Pratapgarh', 'Kaushambi', 'Banda',
    'Hamirpur', 'Mahoba', 'Chitrakoot', 'Jalaun', 'Lalitpur', 'Mirzapur',
    'Sonbhadra', 'Bhadohi', 'Jaunpur', 'Ghazipur', 'Chandauli', 'Ballia',
    'Mau', 'Azamgarh', 'Deoria', 'Kushinagar', 'Maharajganj', 'Siddharthnagar',
    'Sant Kabir Nagar', 'Gonda', 'Balrampur', 'Shravasti', 'Bahraich'
  ],
  'Rajasthan': [
    'Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Sri Ganganagar', 'Hanumangarh',
    'Alwar', 'Bharatpur', 'Ajmer', 'Udaipur', 'Sikar', 'Jhunjhunu', 'Nagaur',
    'Pali', 'Barmer', 'Jalore', 'Bhilwara', 'Chittorgarh', 'Tonk',
    'Sawai Madhopur', 'Bundi', 'Baran', 'Jhalawar', 'Churu', 'Dausa',
    'Dholpur', 'Karauli', 'Rajsamand', 'Banswara', 'Dungarpur', 'Pratapgarh', 'Sirohi', 'Jaisalmer'
  ],
  'Gujarat': [
    'Rajkot', 'Surat', 'Ahmedabad', 'Vadodara', 'Bhavnagar', 'Jamnagar',
    'Junagadh', 'Amreli', 'Mehsana', 'Banaskantha', 'Sabarkantha', 'Patan',
    'Kheda', 'Anand', 'Bharuch', 'Navsari', 'Valsad', 'Surendranagar',
    'Morbi', 'Gir Somnath', 'Devbhumi Dwarka', 'Porbandar', 'Kutch',
    'Gandhinagar', 'Aravalli', 'Mahisagar', 'Panchmahal', 'Dahod',
    'Chhota Udaipur', 'Narmada', 'Tapi', 'Dang', 'Botad'
  ],
  'Madhya Pradesh': [
    'Indore', 'Ujjain', 'Bhopal', 'Jabalpur', 'Gwalior', 'Sagar', 'Dewas',
    'Dhar', 'Khargone', 'Khandwa', 'Ratlam', 'Mandsaur', 'Neemuch',
    'Narmadapuram', 'Sehore', 'Raisen', 'Harda', 'Vidisha', 'Chhindwara',
    'Narsinghpur', 'Rewa', 'Satna', 'Seoni', 'Balaghat', 'Betul', 'Burhanpur',
    'Barwani', 'Alirajpur', 'Jhabua', 'Agar Malwa', 'Shajapur', 'Rajgarh',
    'Guna', 'Ashoknagar', 'Shivpuri', 'Sheopur', 'Morena', 'Bhind', 'Datia'
  ],
  'Haryana': [
    'Karnal', 'Kurukshetra', 'Ambala', 'Yamunanagar', 'Panipat', 'Sonipat',
    'Rohtak', 'Hisar', 'Sirsa', 'Fatehabad', 'Jind', 'Kaithal', 'Bhiwani',
    'Charkhi Dadri', 'Mahendragarh', 'Rewari', 'Jhajjar', 'Gurugram',
    'Faridabad', 'Palwal', 'Nuh', 'Panchkula'
  ]
};

export const DISTRICT_CENTROIDS: DistrictCentroid[] = [
  {
    "district": "Ballari",
    "state": "Karnataka",
    "lat": 15.1394,
    "lon": 76.9214
  },
  {
    "district": "Kolar",
    "state": "Karnataka",
    "lat": 13.1378,
    "lon": 78.1291
  },
  {
    "district": "Chikkaballapur",
    "state": "Karnataka",
    "lat": 13.4355,
    "lon": 77.7275
  },
  {
    "district": "Bengaluru Urban",
    "state": "Karnataka",
    "lat": 12.9716,
    "lon": 77.5946
  },
  {
    "district": "Bengaluru Rural",
    "state": "Karnataka",
    "lat": 13.2847,
    "lon": 77.5517
  },
  {
    "district": "Belagavi",
    "state": "Karnataka",
    "lat": 15.8497,
    "lon": 74.4977
  },
  {
    "district": "Mysuru",
    "state": "Karnataka",
    "lat": 12.2958,
    "lon": 76.6394
  },
  {
    "district": "Davanagere",
    "state": "Karnataka",
    "lat": 14.4644,
    "lon": 75.9218
  },
  {
    "district": "Dharwad",
    "state": "Karnataka",
    "lat": 15.4589,
    "lon": 75.0078
  },
  {
    "district": "Mandya",
    "state": "Karnataka",
    "lat": 12.5242,
    "lon": 76.8958
  },
  {
    "district": "Hassan",
    "state": "Karnataka",
    "lat": 13.0033,
    "lon": 76.1004
  },
  {
    "district": "Shivamogga",
    "state": "Karnataka",
    "lat": 13.9299,
    "lon": 75.5681
  },
  {
    "district": "Haveri",
    "state": "Karnataka",
    "lat": 14.7954,
    "lon": 75.3991
  },
  {
    "district": "Tumakuru",
    "state": "Karnataka",
    "lat": 13.3409,
    "lon": 77.101
  },
  {
    "district": "Bagalkote",
    "state": "Karnataka",
    "lat": 16.1691,
    "lon": 75.6615
  },
  {
    "district": "Vijayapura",
    "state": "Karnataka",
    "lat": 16.8302,
    "lon": 75.71
  },
  {
    "district": "Kalaburagi",
    "state": "Karnataka",
    "lat": 17.3297,
    "lon": 76.8343
  },
  {
    "district": "Raichur",
    "state": "Karnataka",
    "lat": 16.212,
    "lon": 77.3439
  },
  {
    "district": "Koppal",
    "state": "Karnataka",
    "lat": 15.3456,
    "lon": 76.1548
  },
  {
    "district": "Yadgir",
    "state": "Karnataka",
    "lat": 16.7644,
    "lon": 77.1378
  },
  {
    "district": "Chitradurga",
    "state": "Karnataka",
    "lat": 14.2251,
    "lon": 76.398
  },
  {
    "district": "Gadag",
    "state": "Karnataka",
    "lat": 15.4319,
    "lon": 75.6355
  },
  {
    "district": "Udupi",
    "state": "Karnataka",
    "lat": 13.3409,
    "lon": 74.7421
  },
  {
    "district": "Dakshina Kannada",
    "state": "Karnataka",
    "lat": 12.8703,
    "lon": 74.8806
  },
  {
    "district": "Uttara Kannada",
    "state": "Karnataka",
    "lat": 14.8185,
    "lon": 74.1416
  },
  {
    "district": "Kodagu",
    "state": "Karnataka",
    "lat": 12.3375,
    "lon": 75.8069
  },
  {
    "district": "Chamarajanagar",
    "state": "Karnataka",
    "lat": 11.9261,
    "lon": 76.9437
  },
  {
    "district": "Ramanagara",
    "state": "Karnataka",
    "lat": 12.7209,
    "lon": 77.2799
  },
  {
    "district": "Chikkamagaluru",
    "state": "Karnataka",
    "lat": 13.3161,
    "lon": 75.772
  },
  {
    "district": "Bidar",
    "state": "Karnataka",
    "lat": 17.9104,
    "lon": 77.5199
  },
  {
    "district": "Vijayanagara",
    "state": "Karnataka",
    "lat": 15.2689,
    "lon": 76.3909
  },
  {
    "district": "Nashik",
    "state": "Maharashtra",
    "lat": 19.9975,
    "lon": 73.7898
  },
  {
    "district": "Pune",
    "state": "Maharashtra",
    "lat": 18.5204,
    "lon": 73.8567
  },
  {
    "district": "Ahmednagar",
    "state": "Maharashtra",
    "lat": 19.0952,
    "lon": 74.748
  },
  {
    "district": "Solapur",
    "state": "Maharashtra",
    "lat": 17.6599,
    "lon": 75.9064
  },
  {
    "district": "Kolhapur",
    "state": "Maharashtra",
    "lat": 16.705,
    "lon": 74.2433
  },
  {
    "district": "Satara",
    "state": "Maharashtra",
    "lat": 17.6805,
    "lon": 74.0183
  },
  {
    "district": "Sangli",
    "state": "Maharashtra",
    "lat": 16.8524,
    "lon": 74.5815
  },
  {
    "district": "Jalgaon",
    "state": "Maharashtra",
    "lat": 21.0077,
    "lon": 75.5626
  },
  {
    "district": "Dhule",
    "state": "Maharashtra",
    "lat": 20.9042,
    "lon": 74.7749
  },
  {
    "district": "Chhatrapati Sambhajinagar",
    "state": "Maharashtra",
    "lat": 19.8762,
    "lon": 75.3433
  },
  {
    "district": "Jalna",
    "state": "Maharashtra",
    "lat": 19.8347,
    "lon": 75.8816
  },
  {
    "district": "Parbhani",
    "state": "Maharashtra",
    "lat": 19.2644,
    "lon": 76.7767
  },
  {
    "district": "Beed",
    "state": "Maharashtra",
    "lat": 18.9891,
    "lon": 75.7601
  },
  {
    "district": "Nanded",
    "state": "Maharashtra",
    "lat": 19.1383,
    "lon": 77.321
  },
  {
    "district": "Dharashiv",
    "state": "Maharashtra",
    "lat": 18.1856,
    "lon": 76.0419
  },
  {
    "district": "Latur",
    "state": "Maharashtra",
    "lat": 18.4088,
    "lon": 76.5604
  },
  {
    "district": "Buldhana",
    "state": "Maharashtra",
    "lat": 20.5317,
    "lon": 76.1843
  },
  {
    "district": "Akola",
    "state": "Maharashtra",
    "lat": 20.7002,
    "lon": 77.0082
  },
  {
    "district": "Washim",
    "state": "Maharashtra",
    "lat": 20.1097,
    "lon": 77.1347
  },
  {
    "district": "Amravati",
    "state": "Maharashtra",
    "lat": 20.932,
    "lon": 77.7523
  },
  {
    "district": "Yavatmal",
    "state": "Maharashtra",
    "lat": 20.3888,
    "lon": 78.1204
  },
  {
    "district": "Wardha",
    "state": "Maharashtra",
    "lat": 20.7453,
    "lon": 78.6022
  },
  {
    "district": "Nagpur",
    "state": "Maharashtra",
    "lat": 21.1458,
    "lon": 79.0882
  },
  {
    "district": "Bhandara",
    "state": "Maharashtra",
    "lat": 21.1667,
    "lon": 79.65
  },
  {
    "district": "Gondia",
    "state": "Maharashtra",
    "lat": 21.4598,
    "lon": 80.1961
  },
  {
    "district": "Chandrapur",
    "state": "Maharashtra",
    "lat": 19.9615,
    "lon": 79.2961
  },
  {
    "district": "Gadchiroli",
    "state": "Maharashtra",
    "lat": 20.1849,
    "lon": 80.0024
  },
  {
    "district": "Nandurbar",
    "state": "Maharashtra",
    "lat": 21.3688,
    "lon": 74.2407
  },
  {
    "district": "Raigad",
    "state": "Maharashtra",
    "lat": 18.5158,
    "lon": 73.1822
  },
  {
    "district": "Ratnagiri",
    "state": "Maharashtra",
    "lat": 16.9902,
    "lon": 73.312
  },
  {
    "district": "Sindhudurg",
    "state": "Maharashtra",
    "lat": 16.1264,
    "lon": 73.7142
  },
  {
    "district": "Thane",
    "state": "Maharashtra",
    "lat": 19.2183,
    "lon": 72.9781
  },
  {
    "district": "Palghar",
    "state": "Maharashtra",
    "lat": 19.6967,
    "lon": 72.7699
  },
  {
    "district": "Ludhiana",
    "state": "Punjab",
    "lat": 30.901,
    "lon": 75.8573
  },
  {
    "district": "Jalandhar",
    "state": "Punjab",
    "lat": 31.326,
    "lon": 75.5762
  },
  {
    "district": "Amritsar",
    "state": "Punjab",
    "lat": 31.634,
    "lon": 74.8723
  },
  {
    "district": "Patiala",
    "state": "Punjab",
    "lat": 30.3398,
    "lon": 76.3869
  },
  {
    "district": "Bathinda",
    "state": "Punjab",
    "lat": 30.211,
    "lon": 74.9455
  },
  {
    "district": "Sangrur",
    "state": "Punjab",
    "lat": 30.2458,
    "lon": 75.8421
  },
  {
    "district": "Firozpur",
    "state": "Punjab",
    "lat": 30.9237,
    "lon": 74.6138
  },
  {
    "district": "Fazilka",
    "state": "Punjab",
    "lat": 30.4036,
    "lon": 74.027
  },
  {
    "district": "Gurdaspur",
    "state": "Punjab",
    "lat": 32.0419,
    "lon": 75.4053
  },
  {
    "district": "Hoshiarpur",
    "state": "Punjab",
    "lat": 31.5273,
    "lon": 75.9149
  },
  {
    "district": "Kapurthala",
    "state": "Punjab",
    "lat": 31.3802,
    "lon": 75.3819
  },
  {
    "district": "Mansa",
    "state": "Punjab",
    "lat": 29.988,
    "lon": 75.3934
  },
  {
    "district": "Moga",
    "state": "Punjab",
    "lat": 30.8165,
    "lon": 75.1717
  },
  {
    "district": "Muktsar",
    "state": "Punjab",
    "lat": 30.4744,
    "lon": 74.5166
  },
  {
    "district": "Shaheed Bhagat Singh Nagar",
    "state": "Punjab",
    "lat": 31.1256,
    "lon": 76.1189
  },
  {
    "district": "Rupnagar",
    "state": "Punjab",
    "lat": 30.9664,
    "lon": 76.5331
  },
  {
    "district": "SAS Nagar (Mohali)",
    "state": "Punjab",
    "lat": 30.7046,
    "lon": 76.7179
  },
  {
    "district": "Tarn Taran",
    "state": "Punjab",
    "lat": 31.4519,
    "lon": 74.9272
  },
  {
    "district": "Barnala",
    "state": "Punjab",
    "lat": 30.3819,
    "lon": 75.5472
  },
  {
    "district": "Fatehgarh Sahib",
    "state": "Punjab",
    "lat": 30.6431,
    "lon": 76.3986
  },
  {
    "district": "Faridkot",
    "state": "Punjab",
    "lat": 30.6769,
    "lon": 74.7583
  },
  {
    "district": "Malerkotla",
    "state": "Punjab",
    "lat": 30.5284,
    "lon": 75.8906
  },
  {
    "district": "Pathankot",
    "state": "Punjab",
    "lat": 32.2689,
    "lon": 75.6499
  },
  {
    "district": "Thanjavur",
    "state": "Tamil Nadu",
    "lat": 10.787,
    "lon": 79.1378
  },
  {
    "district": "Tiruvarur",
    "state": "Tamil Nadu",
    "lat": 10.7725,
    "lon": 79.6366
  },
  {
    "district": "Nagapattinam",
    "state": "Tamil Nadu",
    "lat": 10.7672,
    "lon": 79.8449
  },
  {
    "district": "Madurai",
    "state": "Tamil Nadu",
    "lat": 9.9252,
    "lon": 78.1198
  },
  {
    "district": "Coimbatore",
    "state": "Tamil Nadu",
    "lat": 11.0168,
    "lon": 76.9558
  },
  {
    "district": "Tiruchirappalli",
    "state": "Tamil Nadu",
    "lat": 10.7905,
    "lon": 78.7047
  },
  {
    "district": "Salem",
    "state": "Tamil Nadu",
    "lat": 11.6643,
    "lon": 78.146
  },
  {
    "district": "Erode",
    "state": "Tamil Nadu",
    "lat": 11.341,
    "lon": 77.7172
  },
  {
    "district": "Tirunelveli",
    "state": "Tamil Nadu",
    "lat": 8.7139,
    "lon": 77.7567
  },
  {
    "district": "Dindigul",
    "state": "Tamil Nadu",
    "lat": 10.3673,
    "lon": 77.9803
  },
  {
    "district": "Theni",
    "state": "Tamil Nadu",
    "lat": 10.0104,
    "lon": 77.4768
  },
  {
    "district": "Virudhunagar",
    "state": "Tamil Nadu",
    "lat": 9.5872,
    "lon": 77.9514
  },
  {
    "district": "Cuddalore",
    "state": "Tamil Nadu",
    "lat": 11.748,
    "lon": 79.7714
  },
  {
    "district": "Villupuram",
    "state": "Tamil Nadu",
    "lat": 11.9401,
    "lon": 79.4861
  },
  {
    "district": "Vellore",
    "state": "Tamil Nadu",
    "lat": 12.9165,
    "lon": 79.1325
  },
  {
    "district": "Tiruvannamalai",
    "state": "Tamil Nadu",
    "lat": 12.2253,
    "lon": 79.0747
  },
  {
    "district": "Kanchipuram",
    "state": "Tamil Nadu",
    "lat": 12.8342,
    "lon": 79.7036
  },
  {
    "district": "Tiruvallur",
    "state": "Tamil Nadu",
    "lat": 13.1432,
    "lon": 79.9079
  },
  {
    "district": "Dharmapuri",
    "state": "Tamil Nadu",
    "lat": 12.1211,
    "lon": 78.1582
  },
  {
    "district": "Krishnagiri",
    "state": "Tamil Nadu",
    "lat": 12.5186,
    "lon": 78.2137
  },
  {
    "district": "Namakkal",
    "state": "Tamil Nadu",
    "lat": 11.2189,
    "lon": 78.1674
  },
  {
    "district": "Karur",
    "state": "Tamil Nadu",
    "lat": 10.9601,
    "lon": 78.0766
  },
  {
    "district": "Perambalur",
    "state": "Tamil Nadu",
    "lat": 11.2342,
    "lon": 78.882
  },
  {
    "district": "Pudukkottai",
    "state": "Tamil Nadu",
    "lat": 10.3797,
    "lon": 78.8208
  },
  {
    "district": "Sivaganga",
    "state": "Tamil Nadu",
    "lat": 9.8433,
    "lon": 78.4809
  },
  {
    "district": "Ramanathapuram",
    "state": "Tamil Nadu",
    "lat": 9.3639,
    "lon": 78.8395
  },
  {
    "district": "Thoothukudi",
    "state": "Tamil Nadu",
    "lat": 8.7642,
    "lon": 78.1348
  },
  {
    "district": "Kanyakumari",
    "state": "Tamil Nadu",
    "lat": 8.0883,
    "lon": 77.5385
  },
  {
    "district": "Tiruppur",
    "state": "Tamil Nadu",
    "lat": 11.1085,
    "lon": 77.3411
  },
  {
    "district": "Ranipet",
    "state": "Tamil Nadu",
    "lat": 12.9272,
    "lon": 79.333
  },
  {
    "district": "Tenkasi",
    "state": "Tamil Nadu",
    "lat": 8.9594,
    "lon": 77.3161
  },
  {
    "district": "Mayiladuthurai",
    "state": "Tamil Nadu",
    "lat": 11.1075,
    "lon": 79.6522
  },
  {
    "district": "Guntur",
    "state": "Andhra Pradesh",
    "lat": 16.3067,
    "lon": 80.4365
  },
  {
    "district": "Kurnool",
    "state": "Andhra Pradesh",
    "lat": 15.8281,
    "lon": 78.0373
  },
  {
    "district": "Krishna",
    "state": "Andhra Pradesh",
    "lat": 16.1809,
    "lon": 81.1303
  },
  {
    "district": "West Godavari",
    "state": "Andhra Pradesh",
    "lat": 16.7107,
    "lon": 81.0952
  },
  {
    "district": "East Godavari",
    "state": "Andhra Pradesh",
    "lat": 17.0005,
    "lon": 81.804
  },
  {
    "district": "Anantapur",
    "state": "Andhra Pradesh",
    "lat": 14.6819,
    "lon": 77.6006
  },
  {
    "district": "Chittoor",
    "state": "Andhra Pradesh",
    "lat": 13.2172,
    "lon": 79.1003
  },
  {
    "district": "YSR Kadapa",
    "state": "Andhra Pradesh",
    "lat": 14.4673,
    "lon": 78.8242
  },
  {
    "district": "Prakasam",
    "state": "Andhra Pradesh",
    "lat": 15.5057,
    "lon": 80.0499
  },
  {
    "district": "SPSR Nellore",
    "state": "Andhra Pradesh",
    "lat": 14.4426,
    "lon": 79.9865
  },
  {
    "district": "Visakhapatnam",
    "state": "Andhra Pradesh",
    "lat": 17.6868,
    "lon": 83.2185
  },
  {
    "district": "Vizianagaram",
    "state": "Andhra Pradesh",
    "lat": 18.1067,
    "lon": 83.3956
  },
  {
    "district": "Srikakulam",
    "state": "Andhra Pradesh",
    "lat": 18.2949,
    "lon": 83.8938
  },
  {
    "district": "Bapatla",
    "state": "Andhra Pradesh",
    "lat": 15.9042,
    "lon": 80.4675
  },
  {
    "district": "Palnadu",
    "state": "Andhra Pradesh",
    "lat": 16.2342,
    "lon": 80.0441
  },
  {
    "district": "Nandyal",
    "state": "Andhra Pradesh",
    "lat": 15.4889,
    "lon": 78.4836
  },
  {
    "district": "Eluru",
    "state": "Andhra Pradesh",
    "lat": 16.7107,
    "lon": 81.0952
  },
  {
    "district": "Kakinada",
    "state": "Andhra Pradesh",
    "lat": 16.9891,
    "lon": 82.2475
  },
  {
    "district": "Konaseema",
    "state": "Andhra Pradesh",
    "lat": 16.5742,
    "lon": 82.0033
  },
  {
    "district": "Anakapalli",
    "state": "Andhra Pradesh",
    "lat": 17.6913,
    "lon": 83.0039
  },
  {
    "district": "Alluri Sitharama Raju",
    "state": "Andhra Pradesh",
    "lat": 18.0642,
    "lon": 82.6841
  },
  {
    "district": "Parvathipuram Manyam",
    "state": "Andhra Pradesh",
    "lat": 18.7842,
    "lon": 83.4241
  },
  {
    "district": "Sri Sathya Sai",
    "state": "Andhra Pradesh",
    "lat": 14.1642,
    "lon": 77.8142
  },
  {
    "district": "Annamayya",
    "state": "Andhra Pradesh",
    "lat": 14.0242,
    "lon": 78.7541
  },
  {
    "district": "Tirupati",
    "state": "Andhra Pradesh",
    "lat": 13.6288,
    "lon": 79.4192
  },
  {
    "district": "Warangal",
    "state": "Telangana",
    "lat": 17.9689,
    "lon": 79.5941
  },
  {
    "district": "Karimnagar",
    "state": "Telangana",
    "lat": 18.4386,
    "lon": 79.1288
  },
  {
    "district": "Nalgonda",
    "state": "Telangana",
    "lat": 17.0575,
    "lon": 79.2684
  },
  {
    "district": "Khammam",
    "state": "Telangana",
    "lat": 17.2473,
    "lon": 80.1514
  },
  {
    "district": "Nizamabad",
    "state": "Telangana",
    "lat": 18.6725,
    "lon": 78.0941
  },
  {
    "district": "Mahabubnagar",
    "state": "Telangana",
    "lat": 16.7488,
    "lon": 77.9856
  },
  {
    "district": "Medak",
    "state": "Telangana",
    "lat": 18.0485,
    "lon": 78.2618
  },
  {
    "district": "Rangareddy",
    "state": "Telangana",
    "lat": 17.4399,
    "lon": 78.4983
  },
  {
    "district": "Adilabad",
    "state": "Telangana",
    "lat": 19.6641,
    "lon": 78.532
  },
  {
    "district": "Sangareddy",
    "state": "Telangana",
    "lat": 17.619,
    "lon": 78.0817
  },
  {
    "district": "Siddipet",
    "state": "Telangana",
    "lat": 18.1018,
    "lon": 78.852
  },
  {
    "district": "Suryapet",
    "state": "Telangana",
    "lat": 17.1439,
    "lon": 79.6239
  },
  {
    "district": "Jagtial",
    "state": "Telangana",
    "lat": 18.7942,
    "lon": 78.9142
  },
  {
    "district": "Peddapalli",
    "state": "Telangana",
    "lat": 18.6142,
    "lon": 79.3742
  },
  {
    "district": "Kamareddy",
    "state": "Telangana",
    "lat": 18.3242,
    "lon": 78.3442
  },
  {
    "district": "Mancherial",
    "state": "Telangana",
    "lat": 18.8742,
    "lon": 79.4642
  },
  {
    "district": "Nirmal",
    "state": "Telangana",
    "lat": 19.0942,
    "lon": 78.3442
  },
  {
    "district": "Kumuram Bheem Asifabad",
    "state": "Telangana",
    "lat": 19.3642,
    "lon": 79.2842
  },
  {
    "district": "Bhadradri Kothagudem",
    "state": "Telangana",
    "lat": 17.5542,
    "lon": 80.6242
  },
  {
    "district": "Mahabubabad",
    "state": "Telangana",
    "lat": 17.5942,
    "lon": 80.0042
  },
  {
    "district": "Jangaon",
    "state": "Telangana",
    "lat": 17.7242,
    "lon": 79.1842
  },
  {
    "district": "Jayashankar Bhupalpally",
    "state": "Telangana",
    "lat": 18.4342,
    "lon": 79.8642
  },
  {
    "district": "Jogulamba Gadwal",
    "state": "Telangana",
    "lat": 16.2342,
    "lon": 77.8042
  },
  {
    "district": "Wanaparthy",
    "state": "Telangana",
    "lat": 16.3642,
    "lon": 78.0642
  },
  {
    "district": "Nagarkurnool",
    "state": "Telangana",
    "lat": 16.4842,
    "lon": 78.3342
  },
  {
    "district": "Narayanpet",
    "state": "Telangana",
    "lat": 16.7342,
    "lon": 77.5042
  },
  {
    "district": "Vikarabad",
    "state": "Telangana",
    "lat": 17.3342,
    "lon": 77.9042
  },
  {
    "district": "Medchal Malkajgiri",
    "state": "Telangana",
    "lat": 17.6242,
    "lon": 78.4842
  },
  {
    "district": "Hyderabad",
    "state": "Telangana",
    "lat": 17.385,
    "lon": 78.4867
  },
  {
    "district": "Agra",
    "state": "Uttar Pradesh",
    "lat": 27.1767,
    "lon": 78.0081
  },
  {
    "district": "Aligarh",
    "state": "Uttar Pradesh",
    "lat": 27.8974,
    "lon": 78.088
  },
  {
    "district": "Mathura",
    "state": "Uttar Pradesh",
    "lat": 27.4924,
    "lon": 77.6737
  },
  {
    "district": "Meerut",
    "state": "Uttar Pradesh",
    "lat": 28.9845,
    "lon": 77.7064
  },
  {
    "district": "Muzaffarnagar",
    "state": "Uttar Pradesh",
    "lat": 29.4727,
    "lon": 77.7085
  },
  {
    "district": "Saharanpur",
    "state": "Uttar Pradesh",
    "lat": 29.9671,
    "lon": 77.5452
  },
  {
    "district": "Bareilly",
    "state": "Uttar Pradesh",
    "lat": 28.367,
    "lon": 79.4304
  },
  {
    "district": "Moradabad",
    "state": "Uttar Pradesh",
    "lat": 28.8386,
    "lon": 78.7733
  },
  {
    "district": "Kanpur Nagar",
    "state": "Uttar Pradesh",
    "lat": 26.4499,
    "lon": 80.3319
  },
  {
    "district": "Lucknow",
    "state": "Uttar Pradesh",
    "lat": 26.8467,
    "lon": 80.9462
  },
  {
    "district": "Varanasi",
    "state": "Uttar Pradesh",
    "lat": 25.3176,
    "lon": 82.9739
  },
  {
    "district": "Prayagraj",
    "state": "Uttar Pradesh",
    "lat": 25.4358,
    "lon": 81.8463
  },
  {
    "district": "Gorakhpur",
    "state": "Uttar Pradesh",
    "lat": 26.7606,
    "lon": 83.3732
  },
  {
    "district": "Jhansi",
    "state": "Uttar Pradesh",
    "lat": 25.4484,
    "lon": 78.5685
  },
  {
    "district": "Barabanki",
    "state": "Uttar Pradesh",
    "lat": 26.9272,
    "lon": 81.1834
  },
  {
    "district": "Ayodhya",
    "state": "Uttar Pradesh",
    "lat": 26.7922,
    "lon": 82.1998
  },
  {
    "district": "Basti",
    "state": "Uttar Pradesh",
    "lat": 26.8024,
    "lon": 82.7631
  },
  {
    "district": "Hardoi",
    "state": "Uttar Pradesh",
    "lat": 27.3942,
    "lon": 80.1242
  },
  {
    "district": "Lakhimpur Kheri",
    "state": "Uttar Pradesh",
    "lat": 27.9442,
    "lon": 80.7742
  },
  {
    "district": "Sitapur",
    "state": "Uttar Pradesh",
    "lat": 27.5642,
    "lon": 80.6842
  },
  {
    "district": "Bulandshahr",
    "state": "Uttar Pradesh",
    "lat": 28.4042,
    "lon": 77.8542
  },
  {
    "district": "Firozabad",
    "state": "Uttar Pradesh",
    "lat": 27.1542,
    "lon": 78.3942
  },
  {
    "district": "Mainpuri",
    "state": "Uttar Pradesh",
    "lat": 27.2342,
    "lon": 79.0242
  },
  {
    "district": "Etah",
    "state": "Uttar Pradesh",
    "lat": 27.6342,
    "lon": 78.6642
  },
  {
    "district": "Badaun",
    "state": "Uttar Pradesh",
    "lat": 28.0342,
    "lon": 79.1242
  },
  {
    "district": "Shahjahanpur",
    "state": "Uttar Pradesh",
    "lat": 27.8842,
    "lon": 79.9142
  },
  {
    "district": "Pilibhit",
    "state": "Uttar Pradesh",
    "lat": 28.6242,
    "lon": 79.8042
  },
  {
    "district": "Rampur",
    "state": "Uttar Pradesh",
    "lat": 28.8142,
    "lon": 79.0242
  },
  {
    "district": "Bijnor",
    "state": "Uttar Pradesh",
    "lat": 29.3742,
    "lon": 78.1342
  },
  {
    "district": "Amroha",
    "state": "Uttar Pradesh",
    "lat": 28.9042,
    "lon": 78.4742
  },
  {
    "district": "Sambhal",
    "state": "Uttar Pradesh",
    "lat": 28.5842,
    "lon": 78.5742
  },
  {
    "district": "Hathras",
    "state": "Uttar Pradesh",
    "lat": 27.6042,
    "lon": 78.0542
  },
  {
    "district": "Kasganj",
    "state": "Uttar Pradesh",
    "lat": 27.8042,
    "lon": 78.6542
  },
  {
    "district": "Farrukhabad",
    "state": "Uttar Pradesh",
    "lat": 27.3842,
    "lon": 79.5842
  },
  {
    "district": "Kannauj",
    "state": "Uttar Pradesh",
    "lat": 27.0542,
    "lon": 79.9142
  },
  {
    "district": "Etawah",
    "state": "Uttar Pradesh",
    "lat": 26.7742,
    "lon": 79.0242
  },
  {
    "district": "Auraiya",
    "state": "Uttar Pradesh",
    "lat": 26.4642,
    "lon": 79.5142
  },
  {
    "district": "Kanpur Dehat",
    "state": "Uttar Pradesh",
    "lat": 26.3342,
    "lon": 79.9542
  },
  {
    "district": "Unnao",
    "state": "Uttar Pradesh",
    "lat": 26.5442,
    "lon": 80.4942
  },
  {
    "district": "Rae Bareli",
    "state": "Uttar Pradesh",
    "lat": 26.2342,
    "lon": 81.2442
  },
  {
    "district": "Amethi",
    "state": "Uttar Pradesh",
    "lat": 26.1542,
    "lon": 81.8142
  },
  {
    "district": "Sultanpur",
    "state": "Uttar Pradesh",
    "lat": 26.2642,
    "lon": 82.0742
  },
  {
    "district": "Fatehpur",
    "state": "Uttar Pradesh",
    "lat": 25.9242,
    "lon": 80.8142
  },
  {
    "district": "Pratapgarh",
    "state": "Uttar Pradesh",
    "lat": 25.8942,
    "lon": 81.9442
  },
  {
    "district": "Kaushambi",
    "state": "Uttar Pradesh",
    "lat": 25.5342,
    "lon": 81.4242
  },
  {
    "district": "Banda",
    "state": "Uttar Pradesh",
    "lat": 25.4842,
    "lon": 80.3342
  },
  {
    "district": "Hamirpur",
    "state": "Uttar Pradesh",
    "lat": 25.9542,
    "lon": 80.1542
  },
  {
    "district": "Mahoba",
    "state": "Uttar Pradesh",
    "lat": 25.2942,
    "lon": 79.8742
  },
  {
    "district": "Chitrakoot",
    "state": "Uttar Pradesh",
    "lat": 25.1742,
    "lon": 80.8742
  },
  {
    "district": "Jalaun",
    "state": "Uttar Pradesh",
    "lat": 26.1442,
    "lon": 79.3542
  },
  {
    "district": "Lalitpur",
    "state": "Uttar Pradesh",
    "lat": 24.6942,
    "lon": 78.4142
  },
  {
    "district": "Mirzapur",
    "state": "Uttar Pradesh",
    "lat": 25.1442,
    "lon": 82.5642
  },
  {
    "district": "Sonbhadra",
    "state": "Uttar Pradesh",
    "lat": 24.6842,
    "lon": 83.0642
  },
  {
    "district": "Bhadohi",
    "state": "Uttar Pradesh",
    "lat": 25.3942,
    "lon": 82.5742
  },
  {
    "district": "Jaunpur",
    "state": "Uttar Pradesh",
    "lat": 25.7542,
    "lon": 82.6842
  },
  {
    "district": "Ghazipur",
    "state": "Uttar Pradesh",
    "lat": 25.5842,
    "lon": 83.5742
  },
  {
    "district": "Chandauli",
    "state": "Uttar Pradesh",
    "lat": 25.2642,
    "lon": 83.2742
  },
  {
    "district": "Ballia",
    "state": "Uttar Pradesh",
    "lat": 25.7542,
    "lon": 84.1442
  },
  {
    "district": "Mau",
    "state": "Uttar Pradesh",
    "lat": 25.9442,
    "lon": 83.5642
  },
  {
    "district": "Azamgarh",
    "state": "Uttar Pradesh",
    "lat": 26.0642,
    "lon": 83.1842
  },
  {
    "district": "Deoria",
    "state": "Uttar Pradesh",
    "lat": 26.5042,
    "lon": 83.7842
  },
  {
    "district": "Kushinagar",
    "state": "Uttar Pradesh",
    "lat": 26.7442,
    "lon": 83.8942
  },
  {
    "district": "Maharajganj",
    "state": "Uttar Pradesh",
    "lat": 27.1442,
    "lon": 83.5642
  },
  {
    "district": "Siddharthnagar",
    "state": "Uttar Pradesh",
    "lat": 27.2942,
    "lon": 82.8142
  },
  {
    "district": "Sant Kabir Nagar",
    "state": "Uttar Pradesh",
    "lat": 26.7842,
    "lon": 83.0342
  },
  {
    "district": "Gonda",
    "state": "Uttar Pradesh",
    "lat": 27.1342,
    "lon": 81.9642
  },
  {
    "district": "Balrampur",
    "state": "Uttar Pradesh",
    "lat": 27.4342,
    "lon": 82.1842
  },
  {
    "district": "Shravasti",
    "state": "Uttar Pradesh",
    "lat": 27.7042,
    "lon": 81.9142
  },
  {
    "district": "Bahraich",
    "state": "Uttar Pradesh",
    "lat": 27.5742,
    "lon": 81.5942
  },
  {
    "district": "Jaipur",
    "state": "Rajasthan",
    "lat": 26.9124,
    "lon": 75.7873
  },
  {
    "district": "Jodhpur",
    "state": "Rajasthan",
    "lat": 26.2389,
    "lon": 73.0243
  },
  {
    "district": "Kota",
    "state": "Rajasthan",
    "lat": 25.2138,
    "lon": 75.8648
  },
  {
    "district": "Bikaner",
    "state": "Rajasthan",
    "lat": 28.0229,
    "lon": 73.3119
  },
  {
    "district": "Sri Ganganagar",
    "state": "Rajasthan",
    "lat": 29.9038,
    "lon": 73.8772
  },
  {
    "district": "Hanumangarh",
    "state": "Rajasthan",
    "lat": 29.5817,
    "lon": 74.3294
  },
  {
    "district": "Alwar",
    "state": "Rajasthan",
    "lat": 27.553,
    "lon": 76.6346
  },
  {
    "district": "Bharatpur",
    "state": "Rajasthan",
    "lat": 27.2152,
    "lon": 77.503
  },
  {
    "district": "Ajmer",
    "state": "Rajasthan",
    "lat": 26.4499,
    "lon": 74.6399
  },
  {
    "district": "Udaipur",
    "state": "Rajasthan",
    "lat": 24.5854,
    "lon": 73.7125
  },
  {
    "district": "Sikar",
    "state": "Rajasthan",
    "lat": 27.6094,
    "lon": 75.1398
  },
  {
    "district": "Jhunjhunu",
    "state": "Rajasthan",
    "lat": 28.1289,
    "lon": 75.3995
  },
  {
    "district": "Nagaur",
    "state": "Rajasthan",
    "lat": 27.2021,
    "lon": 73.7439
  },
  {
    "district": "Pali",
    "state": "Rajasthan",
    "lat": 25.7711,
    "lon": 73.3234
  },
  {
    "district": "Barmer",
    "state": "Rajasthan",
    "lat": 25.7521,
    "lon": 71.3967
  },
  {
    "district": "Jalore",
    "state": "Rajasthan",
    "lat": 25.3444,
    "lon": 72.6155
  },
  {
    "district": "Bhilwara",
    "state": "Rajasthan",
    "lat": 25.3407,
    "lon": 74.6313
  },
  {
    "district": "Chittorgarh",
    "state": "Rajasthan",
    "lat": 24.8887,
    "lon": 74.6269
  },
  {
    "district": "Tonk",
    "state": "Rajasthan",
    "lat": 26.1627,
    "lon": 75.7885
  },
  {
    "district": "Sawai Madhopur",
    "state": "Rajasthan",
    "lat": 25.9928,
    "lon": 76.3688
  },
  {
    "district": "Bundi",
    "state": "Rajasthan",
    "lat": 25.4415,
    "lon": 75.6454
  },
  {
    "district": "Baran",
    "state": "Rajasthan",
    "lat": 25.1011,
    "lon": 76.5132
  },
  {
    "district": "Jhalawar",
    "state": "Rajasthan",
    "lat": 24.5973,
    "lon": 76.161
  },
  {
    "district": "Churu",
    "state": "Rajasthan",
    "lat": 28.29,
    "lon": 74.9698
  },
  {
    "district": "Dausa",
    "state": "Rajasthan",
    "lat": 26.8924,
    "lon": 76.3378
  },
  {
    "district": "Dholpur",
    "state": "Rajasthan",
    "lat": 26.7025,
    "lon": 77.8934
  },
  {
    "district": "Karauli",
    "state": "Rajasthan",
    "lat": 26.4952,
    "lon": 77.0207
  },
  {
    "district": "Rajsamand",
    "state": "Rajasthan",
    "lat": 25.0742,
    "lon": 73.8842
  },
  {
    "district": "Banswara",
    "state": "Rajasthan",
    "lat": 23.5442,
    "lon": 74.4342
  },
  {
    "district": "Dungarpur",
    "state": "Rajasthan",
    "lat": 23.8442,
    "lon": 73.7142
  },
  {
    "district": "Pratapgarh",
    "state": "Rajasthan",
    "lat": 24.0342,
    "lon": 74.7842
  },
  {
    "district": "Sirohi",
    "state": "Rajasthan",
    "lat": 24.8842,
    "lon": 72.8642
  },
  {
    "district": "Jaisalmer",
    "state": "Rajasthan",
    "lat": 26.9157,
    "lon": 70.9083
  },
  {
    "district": "Rajkot",
    "state": "Gujarat",
    "lat": 22.3039,
    "lon": 70.8022
  },
  {
    "district": "Surat",
    "state": "Gujarat",
    "lat": 21.1702,
    "lon": 72.8311
  },
  {
    "district": "Ahmedabad",
    "state": "Gujarat",
    "lat": 23.0225,
    "lon": 72.5714
  },
  {
    "district": "Vadodara",
    "state": "Gujarat",
    "lat": 22.3072,
    "lon": 73.1812
  },
  {
    "district": "Bhavnagar",
    "state": "Gujarat",
    "lat": 21.7645,
    "lon": 72.1519
  },
  {
    "district": "Jamnagar",
    "state": "Gujarat",
    "lat": 22.4707,
    "lon": 70.0577
  },
  {
    "district": "Junagadh",
    "state": "Gujarat",
    "lat": 21.5222,
    "lon": 70.4579
  },
  {
    "district": "Amreli",
    "state": "Gujarat",
    "lat": 21.6032,
    "lon": 71.2221
  },
  {
    "district": "Mehsana",
    "state": "Gujarat",
    "lat": 23.588,
    "lon": 72.3693
  },
  {
    "district": "Banaskantha",
    "state": "Gujarat",
    "lat": 24.1724,
    "lon": 72.4346
  },
  {
    "district": "Sabarkantha",
    "state": "Gujarat",
    "lat": 23.5977,
    "lon": 72.9698
  },
  {
    "district": "Patan",
    "state": "Gujarat",
    "lat": 23.8493,
    "lon": 72.1266
  },
  {
    "district": "Kheda",
    "state": "Gujarat",
    "lat": 22.7547,
    "lon": 72.6837
  },
  {
    "district": "Anand",
    "state": "Gujarat",
    "lat": 22.5645,
    "lon": 72.9289
  },
  {
    "district": "Bharuch",
    "state": "Gujarat",
    "lat": 21.7051,
    "lon": 72.9959
  },
  {
    "district": "Navsari",
    "state": "Gujarat",
    "lat": 20.9467,
    "lon": 72.952
  },
  {
    "district": "Valsad",
    "state": "Gujarat",
    "lat": 20.5992,
    "lon": 72.9342
  },
  {
    "district": "Surendranagar",
    "state": "Gujarat",
    "lat": 22.7278,
    "lon": 71.637
  },
  {
    "district": "Morbi",
    "state": "Gujarat",
    "lat": 22.812,
    "lon": 70.8378
  },
  {
    "district": "Gir Somnath",
    "state": "Gujarat",
    "lat": 20.9042,
    "lon": 70.3642
  },
  {
    "district": "Devbhumi Dwarka",
    "state": "Gujarat",
    "lat": 22.2442,
    "lon": 68.9642
  },
  {
    "district": "Porbandar",
    "state": "Gujarat",
    "lat": 21.6417,
    "lon": 69.6293
  },
  {
    "district": "Kutch",
    "state": "Gujarat",
    "lat": 23.7337,
    "lon": 69.8597
  },
  {
    "district": "Gandhinagar",
    "state": "Gujarat",
    "lat": 23.2156,
    "lon": 72.6369
  },
  {
    "district": "Aravalli",
    "state": "Gujarat",
    "lat": 23.5442,
    "lon": 73.1742
  },
  {
    "district": "Mahisagar",
    "state": "Gujarat",
    "lat": 23.1642,
    "lon": 73.5742
  },
  {
    "district": "Panchmahal",
    "state": "Gujarat",
    "lat": 22.7742,
    "lon": 73.6142
  },
  {
    "district": "Dahod",
    "state": "Gujarat",
    "lat": 22.8342,
    "lon": 74.2542
  },
  {
    "district": "Chhota Udaipur",
    "state": "Gujarat",
    "lat": 22.3042,
    "lon": 74.0142
  },
  {
    "district": "Narmada",
    "state": "Gujarat",
    "lat": 21.8742,
    "lon": 73.5042
  },
  {
    "district": "Tapi",
    "state": "Gujarat",
    "lat": 21.2442,
    "lon": 73.4042
  },
  {
    "district": "Dang",
    "state": "Gujarat",
    "lat": 20.8542,
    "lon": 73.7042
  },
  {
    "district": "Botad",
    "state": "Gujarat",
    "lat": 22.1742,
    "lon": 71.6642
  },
  {
    "district": "Indore",
    "state": "Madhya Pradesh",
    "lat": 22.7196,
    "lon": 75.8577
  },
  {
    "district": "Ujjain",
    "state": "Madhya Pradesh",
    "lat": 23.1765,
    "lon": 75.7885
  },
  {
    "district": "Bhopal",
    "state": "Madhya Pradesh",
    "lat": 23.2599,
    "lon": 77.4126
  },
  {
    "district": "Jabalpur",
    "state": "Madhya Pradesh",
    "lat": 23.1815,
    "lon": 79.9864
  },
  {
    "district": "Gwalior",
    "state": "Madhya Pradesh",
    "lat": 26.2183,
    "lon": 78.1828
  },
  {
    "district": "Sagar",
    "state": "Madhya Pradesh",
    "lat": 23.8388,
    "lon": 78.7378
  },
  {
    "district": "Dewas",
    "state": "Madhya Pradesh",
    "lat": 22.9676,
    "lon": 76.0534
  },
  {
    "district": "Dhar",
    "state": "Madhya Pradesh",
    "lat": 22.5978,
    "lon": 75.2974
  },
  {
    "district": "Khargone",
    "state": "Madhya Pradesh",
    "lat": 21.8234,
    "lon": 75.6186
  },
  {
    "district": "Khandwa",
    "state": "Madhya Pradesh",
    "lat": 21.8314,
    "lon": 76.3498
  },
  {
    "district": "Ratlam",
    "state": "Madhya Pradesh",
    "lat": 23.3315,
    "lon": 75.0367
  },
  {
    "district": "Mandsaur",
    "state": "Madhya Pradesh",
    "lat": 24.0728,
    "lon": 75.0694
  },
  {
    "district": "Neemuch",
    "state": "Madhya Pradesh",
    "lat": 24.4649,
    "lon": 74.8722
  },
  {
    "district": "Narmadapuram",
    "state": "Madhya Pradesh",
    "lat": 22.7519,
    "lon": 77.7289
  },
  {
    "district": "Sehore",
    "state": "Madhya Pradesh",
    "lat": 23.2031,
    "lon": 77.0844
  },
  {
    "district": "Raisen",
    "state": "Madhya Pradesh",
    "lat": 23.3315,
    "lon": 77.7816
  },
  {
    "district": "Harda",
    "state": "Madhya Pradesh",
    "lat": 22.3444,
    "lon": 77.0945
  },
  {
    "district": "Vidisha",
    "state": "Madhya Pradesh",
    "lat": 23.5251,
    "lon": 77.8081
  },
  {
    "district": "Chhindwara",
    "state": "Madhya Pradesh",
    "lat": 22.0574,
    "lon": 78.9382
  },
  {
    "district": "Narsinghpur",
    "state": "Madhya Pradesh",
    "lat": 22.9463,
    "lon": 79.1973
  },
  {
    "district": "Rewa",
    "state": "Madhya Pradesh",
    "lat": 24.5362,
    "lon": 81.3037
  },
  {
    "district": "Satna",
    "state": "Madhya Pradesh",
    "lat": 24.5805,
    "lon": 80.8293
  },
  {
    "district": "Seoni",
    "state": "Madhya Pradesh",
    "lat": 22.0869,
    "lon": 79.5435
  },
  {
    "district": "Balaghat",
    "state": "Madhya Pradesh",
    "lat": 21.8129,
    "lon": 80.1837
  },
  {
    "district": "Betul",
    "state": "Madhya Pradesh",
    "lat": 21.9014,
    "lon": 77.9015
  },
  {
    "district": "Burhanpur",
    "state": "Madhya Pradesh",
    "lat": 21.3142,
    "lon": 76.2242
  },
  {
    "district": "Barwani",
    "state": "Madhya Pradesh",
    "lat": 22.0342,
    "lon": 74.9042
  },
  {
    "district": "Alirajpur",
    "state": "Madhya Pradesh",
    "lat": 22.3042,
    "lon": 74.3542
  },
  {
    "district": "Jhabua",
    "state": "Madhya Pradesh",
    "lat": 22.7742,
    "lon": 74.5942
  },
  {
    "district": "Agar Malwa",
    "state": "Madhya Pradesh",
    "lat": 23.7142,
    "lon": 76.0142
  },
  {
    "district": "Shajapur",
    "state": "Madhya Pradesh",
    "lat": 23.4242,
    "lon": 76.2742
  },
  {
    "district": "Rajgarh",
    "state": "Madhya Pradesh",
    "lat": 24.0042,
    "lon": 76.7242
  },
  {
    "district": "Guna",
    "state": "Madhya Pradesh",
    "lat": 24.6442,
    "lon": 77.3142
  },
  {
    "district": "Ashoknagar",
    "state": "Madhya Pradesh",
    "lat": 24.5742,
    "lon": 77.7242
  },
  {
    "district": "Shivpuri",
    "state": "Madhya Pradesh",
    "lat": 25.4242,
    "lon": 77.6542
  },
  {
    "district": "Sheopur",
    "state": "Madhya Pradesh",
    "lat": 25.6642,
    "lon": 76.6942
  },
  {
    "district": "Morena",
    "state": "Madhya Pradesh",
    "lat": 26.5042,
    "lon": 77.9942
  },
  {
    "district": "Bhind",
    "state": "Madhya Pradesh",
    "lat": 26.5642,
    "lon": 78.7842
  },
  {
    "district": "Datia",
    "state": "Madhya Pradesh",
    "lat": 25.6742,
    "lon": 78.4642
  },
  {
    "district": "Karnal",
    "state": "Haryana",
    "lat": 29.6857,
    "lon": 76.9905
  },
  {
    "district": "Kurukshetra",
    "state": "Haryana",
    "lat": 29.9695,
    "lon": 76.8783
  },
  {
    "district": "Ambala",
    "state": "Haryana",
    "lat": 30.3782,
    "lon": 76.7767
  },
  {
    "district": "Yamunanagar",
    "state": "Haryana",
    "lat": 30.129,
    "lon": 77.2674
  },
  {
    "district": "Panipat",
    "state": "Haryana",
    "lat": 29.3909,
    "lon": 76.9635
  },
  {
    "district": "Sonipat",
    "state": "Haryana",
    "lat": 28.9931,
    "lon": 77.0151
  },
  {
    "district": "Rohtak",
    "state": "Haryana",
    "lat": 28.8955,
    "lon": 76.6066
  },
  {
    "district": "Hisar",
    "state": "Haryana",
    "lat": 29.1492,
    "lon": 75.7217
  },
  {
    "district": "Sirsa",
    "state": "Haryana",
    "lat": 29.5349,
    "lon": 75.029
  },
  {
    "district": "Fatehabad",
    "state": "Haryana",
    "lat": 29.5147,
    "lon": 75.4542
  },
  {
    "district": "Jind",
    "state": "Haryana",
    "lat": 29.315,
    "lon": 76.315
  },
  {
    "district": "Kaithal",
    "state": "Haryana",
    "lat": 29.8015,
    "lon": 76.3996
  },
  {
    "district": "Bhiwani",
    "state": "Haryana",
    "lat": 28.7932,
    "lon": 76.139
  },
  {
    "district": "Charkhi Dadri",
    "state": "Haryana",
    "lat": 28.5921,
    "lon": 76.2653
  },
  {
    "district": "Mahendragarh",
    "state": "Haryana",
    "lat": 28.2789,
    "lon": 76.1485
  },
  {
    "district": "Rewari",
    "state": "Haryana",
    "lat": 28.192,
    "lon": 76.6186
  },
  {
    "district": "Jhajjar",
    "state": "Haryana",
    "lat": 28.6063,
    "lon": 76.6565
  },
  {
    "district": "Gurugram",
    "state": "Haryana",
    "lat": 28.4595,
    "lon": 77.0266
  },
  {
    "district": "Faridabad",
    "state": "Haryana",
    "lat": 28.4089,
    "lon": 77.3178
  },
  {
    "district": "Palwal",
    "state": "Haryana",
    "lat": 28.1448,
    "lon": 77.326
  },
  {
    "district": "Nuh",
    "state": "Haryana",
    "lat": 28.106,
    "lon": 77.0003
  },
  {
    "district": "Panchkula",
    "state": "Haryana",
    "lat": 30.6942,
    "lon": 76.8606
  }
];

export function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function getLocationCoordinates(state: string, district?: string): { lat: number; lon: number } {
  if (district) {
    const directMatch = DISTRICT_CENTROIDS.find(
      c => c.state.toLowerCase() === state.toLowerCase() && 
           c.district.toLowerCase() === district.toLowerCase()
    );
    if (directMatch) return { lat: directMatch.lat, lon: directMatch.lon };

    const partialMatch = DISTRICT_CENTROIDS.find(
      c => c.state.toLowerCase() === state.toLowerCase() && 
           (c.district.toLowerCase().includes(district.toLowerCase()) || district.toLowerCase().includes(c.district.toLowerCase()))
    );
    if (partialMatch) return { lat: partialMatch.lat, lon: partialMatch.lon };
  }

  const stateMatch = DISTRICT_CENTROIDS.find(c => c.state.toLowerCase() === state.toLowerCase());
  if (stateMatch) return { lat: stateMatch.lat, lon: stateMatch.lon };

  return { lat: 15.14, lon: 76.92 }; // Default to Ballari, KA
}

export function getPrecisionCoordinates(state: string, district?: string, taluk?: string, village?: string): { lat: number; lon: number } {
  const base = getLocationCoordinates(state, district);
  if (!taluk && !village) return base;

  const t = (taluk || '').trim();
  const v = (village || '').trim();
  const d = (district || '').trim();

  if ((!t || t.toLowerCase() === d.toLowerCase()) && (!v || v.toLowerCase().includes('central'))) {
    return base;
  }

  // Deterministic localized spatial micro-offset based on taluk and village names (~1-4km within district boundaries)
  const seedStr = `${state}_${d}_${t}_${v}`;
  let hash = 0;
  for (let i = 0; i < seedStr.length; i++) {
    hash = (hash << 5) - hash + seedStr.charCodeAt(i);
    hash |= 0;
  }
  const latOffset = (((Math.abs(hash) % 1000) / 1000) - 0.5) * 0.055;
  const lonOffset = (((Math.abs(hash * 37) % 1000) / 1000) - 0.5) * 0.065;

  return {
    lat: Number((base.lat + latOffset).toFixed(6)),
    lon: Number((base.lon + lonOffset).toFixed(6))
  };
}

export interface TalukVillageInfo {
  taluks: string[];
  defaultTaluk: string;
  defaultVillage: string;
  villagesByTaluk?: Record<string, string[]>;
}

export const DISTRICT_SUBDIVISIONS: Record<string, TalukVillageInfo> = {
  'Bengaluru Urban': {
    taluks: ['Bengaluru North', 'Bengaluru South', 'Bengaluru East', 'Anekal', 'Yelahanka'],
    defaultTaluk: 'Bengaluru North',
    defaultVillage: 'Hesaraghatta',
    villagesByTaluk: {
      'Bengaluru North': ['Hesaraghatta', 'Dasarahalli', 'Yelahanka Hobli', 'Chikkabanavara'],
      'Bengaluru South': ['Kengeri Hobli', 'Begur', 'Uttarahalli', 'Bannerghatta Road'],
      'Bengaluru East': ['K.R. Puram', 'Varthur', 'Bidarahalli', 'Whitefield Hobli'],
      'Anekal': ['Attibele', 'Jigani', 'Sarjapura', 'Marsur', 'Bannerghatta'],
      'Yelahanka': ['Jakkur', 'Sahakarnagar', 'Attur', 'Singanayakanahalli']
    }
  },
  'Bengaluru Rural': {
    taluks: ['Devanahalli', 'Doddaballapura', 'Hosakote', 'Nelamangala'],
    defaultTaluk: 'Devanahalli',
    defaultVillage: 'Vijayapura',
    villagesByTaluk: {
      'Devanahalli': ['Vijayapura', 'Channarayapatna', 'Kundana', 'Koira'],
      'Doddaballapura': ['Tubagere', 'Sasalu', 'Madhure', 'Kasaba'],
      'Hosakote': ['Nandagudi', 'Jadigenahalli', 'Anugondanahalli', 'Sulibele'],
      'Nelamangala': ['Sompura', 'Tyamagondlu', 'Kasaba', 'Dabbeghatta']
    }
  },
  'Ballari': {
    taluks: ['Ballari', 'Siruguppa', 'Kampli', 'Kurugodu', 'Sandur'],
    defaultTaluk: 'Ballari',
    defaultVillage: 'Kudatini',
    villagesByTaluk: {
      'Ballari': ['Kudatini', 'Moka', 'Kolagallu', 'Rupanagudi', 'Halakundi'],
      'Siruguppa': ['Tekkalakote', 'Karur', 'Raravi', 'Hatcholli'],
      'Kampli': ['Emmiganur', 'Devasamudra', 'Metri'],
      'Kurugodu': ['Kudithini Border', 'Yelabenchi', 'Genikehal'],
      'Sandur': ['Toranagallu', 'Choranur', 'Vaddu', 'Yeshwantnagar']
    }
  },
  'Kolar': {
    taluks: ['Kolar', 'Bangarapet', 'Malur', 'Mulbagal', 'Srinivaspur'],
    defaultTaluk: 'Kolar',
    defaultVillage: 'Vemgal',
    villagesByTaluk: {
      'Kolar': ['Vemgal', 'Huthur', 'Sugatur', 'Holur'],
      'Bangarapet': ['Kamasamudram', 'Deshihalli', 'Kolar Gold Fields'],
      'Malur': ['Lakkur', 'Masti', 'Tekal'],
      'Mulbagal': ['Avani', 'Byrakur', 'Tayalur'],
      'Srinivaspur': ['Rayalpad', 'Ronur', 'Yeldur']
    }
  },
  'Chikkaballapur': {
    taluks: ['Chikkaballapur', 'Gauribidanur', 'Bagepalli', 'Sidlaghatta', 'Chintamani'],
    defaultTaluk: 'Chikkaballapur',
    defaultVillage: 'Nandi',
    villagesByTaluk: {
      'Chikkaballapur': ['Nandi', 'Mandikal', 'Peresandra'],
      'Gauribidanur': ['Manchenahalli', 'Doddakurugodu', 'Thondebhavi'],
      'Bagepalli': ['Chelur', 'Pathapalya', 'Mittemari'],
      'Sidlaghatta': ['Dibburahalli', 'Jangamakote', 'Bashettihalli'],
      'Chintamani': ['Murugamalla', 'Kaivara', 'Ambajidurga']
    }
  },
  'Belagavi': {
    taluks: ['Belagavi', 'Gokak', 'Chikkodi', 'Athani', 'Bailhongal', 'Hukkeri', 'Ramdurg', 'Saundatti'],
    defaultTaluk: 'Belagavi',
    defaultVillage: 'Kakati',
    villagesByTaluk: {
      'Belagavi': ['Kakati', 'Peeranwadi', 'Uchagaon', 'Sambara'],
      'Gokak': ['Konnur', 'Koujalgi', 'Arabhavi'],
      'Chikkodi': ['Nipani', 'Ankali', 'Khadaklat'],
      'Athani': ['Kagwad', 'Ainapur', 'Kokatnur']
    }
  },
  'Dharwad': {
    taluks: ['Dharwad', 'Hubballi Urban', 'Hubballi Rural', 'Navalgund', 'Kalghatgi', 'Kundgol', 'Alnavar'],
    defaultTaluk: 'Dharwad',
    defaultVillage: 'Hebballi',
    villagesByTaluk: {
      'Dharwad': ['Hebballi', 'Mugad', 'Garag', 'Tadkod'],
      'Hubballi Rural': ['Annigeri Border', 'Chabbi', 'Kusugal'],
      'Navalgund': ['Morab', 'Annigeri', 'Shalavadi'],
      'Kalghatgi': ['Dhummawad', 'Mishrikoti', 'Devikoppa']
    }
  },
  'Mysuru': {
    taluks: ['Mysuru', 'Nanjangud', 'T. Narasipura', 'Hunsur', 'Heggadadevankote', 'Periyapatna', 'K.R. Nagar'],
    defaultTaluk: 'Mysuru',
    defaultVillage: 'Varuna',
    villagesByTaluk: {
      'Mysuru': ['Varuna', 'Jayapura', 'Elwala', 'Siddalingapura'],
      'Nanjangud': ['Hadinaru', 'Kowlande', 'Hullahalli', 'Biligere'],
      'T. Narasipura': ['Bannur', 'Muguru', 'Sosale'],
      'Hunsur': ['Bilikere', 'Gavadagere', 'Hunasuru Rural']
    }
  },
  'Mandya': {
    taluks: ['Mandya', 'Maddur', 'Malavalli', 'Srirangapatna', 'Pandavapura', 'Nagamangala', 'K.R. Pet'],
    defaultTaluk: 'Mandya',
    defaultVillage: 'Keragodu',
    villagesByTaluk: {
      'Mandya': ['Keragodu', 'Dudda', 'Basaralu', 'Kothathi'],
      'Maddur': ['Besagarahalli', 'Koppa', 'C.A. Kere'],
      'Malavalli': ['Halagur', 'Kirugavalu', 'Bannur Road'],
      'Srirangapatna': ['Arakere', 'K. Shettihalli', 'Palahalli']
    }
  },
  'Hassan': {
    taluks: ['Hassan', 'Arsikere', 'Channarayapatna', 'Holenarasipura', 'Sakleshpur', 'Alur', 'Arkalgud', 'Belur'],
    defaultTaluk: 'Hassan',
    defaultVillage: 'Shantigrama',
    villagesByTaluk: {
      'Hassan': ['Shantigrama', 'Dudda', 'Kattaya', 'Salagame'],
      'Arsikere': ['Banavara', 'Javagal', 'Kanakatte'],
      'Channarayapatna': ['Hirisave', 'Nuggehalli', 'Shravanabelagola'],
      'Sakleshpur': ['Hanbal', 'Hettur', 'Yeslur']
    }
  },
  'Shivamogga': {
    taluks: ['Shivamogga', 'Bhadravathi', 'Thirthahalli', 'Sagar', 'Shikaripura', 'Soraba', 'Hosanagara'],
    defaultTaluk: 'Shivamogga',
    defaultVillage: 'Haranahalli',
    villagesByTaluk: {
      'Shivamogga': ['Haranahalli', 'Kumsi', 'Ayanur', 'Holalur'],
      'Bhadravathi': ['Kudligere', 'Holehonnor', 'Barandur'],
      'Sagar': ['Anandapura', 'Avinahalli', 'Kandika']
    }
  },
  'Tumakuru': {
    taluks: ['Tumakuru', 'Tiptur', 'Kunigal', 'Gubbi', 'Sira', 'Madhugiri', 'Pavagada', 'Koratagere', 'Turuvekere'],
    defaultTaluk: 'Tumakuru',
    defaultVillage: 'Urdigere',
    villagesByTaluk: {
      'Tumakuru': ['Urdigere', 'Bellavi', 'Hebbur', 'Kyatsandra'],
      'Tiptur': ['Honnavalli', 'Kibbanahalli', 'Nonavinakere'],
      'Kunigal': ['Huliyurdurga', 'Amruthur', 'Kothagere']
    }
  },
  'Davanagere': {
    taluks: ['Davanagere', 'Harihara', 'Channagiri', 'Honnali', 'Nyamathi', 'Jagalur'],
    defaultTaluk: 'Davanagere',
    defaultVillage: 'Anaji',
    villagesByTaluk: {
      'Davanagere': ['Anaji', 'Mayakonda', 'Hadadi', 'Lokikere'],
      'Harihara': ['Malebennur', 'Kondajji', 'Fakiragowdanahalli'],
      'Channagiri': ['Santhebennur', 'Basavapatna', 'Hodigere']
    }
  },
  'Kalaburagi': {
    taluks: ['Kalaburagi', 'Aland', 'Afzalpur', 'Chittapur', 'Sedam', 'Chincholi', 'Jewargi'],
    defaultTaluk: 'Kalaburagi',
    defaultVillage: 'Farhatabad',
    villagesByTaluk: {
      'Kalaburagi': ['Farhatabad', 'Kusnoor', 'Kerebhosga', 'Kotnoor'],
      'Chittapur': ['Wadi', 'Shahabad', 'Nalwar'],
      'Jewargi': ['Andola', 'Yedrami', 'Nelogi']
    }
  },
  'Vijayapura': {
    taluks: ['Vijayapura', 'Basavana Bagewadi', 'Indi', 'Muddebihal', 'Sindagi', 'Chadchan', 'Tikota'],
    defaultTaluk: 'Vijayapura',
    defaultVillage: 'Tikota',
    villagesByTaluk: {
      'Vijayapura': ['Tikota', 'Honavad', 'Toravi', 'Kannur'],
      'Indi': ['Loni', 'Horti', 'Zalki'],
      'Basavana Bagewadi': ['Kudagi', 'Kolhar', 'Yalwar']
    }
  },
  'Bagalkote': {
    taluks: ['Bagalkote', 'Badami', 'Hungund', 'Jamkhandi', 'Mudhol', 'Bilgi', 'Guledgudda'],
    defaultTaluk: 'Bagalkote',
    defaultVillage: 'Navanagar',
    villagesByTaluk: {
      'Bagalkote': ['Navanagar', 'Muchakhandi', 'Gaddanakeri'],
      'Badami': ['Pattadakal', 'Kerur', 'Katageri'],
      'Jamkhandi': ['Rabkavi', 'Banhatti', 'Terdal']
    }
  },
  'Raichur': {
    taluks: ['Raichur', 'Manvi', 'Sindhanur', 'Devadurga', 'Lingsugur', 'Maski', 'Sirwar'],
    defaultTaluk: 'Raichur',
    defaultVillage: 'Yeramarus',
    villagesByTaluk: {
      'Raichur': ['Yeramarus', 'Shaktinagar', 'Chandrabanda'],
      'Sindhanur': ['Gorebal', 'Turvihal', 'Jawalagera'],
      'Manvi': ['Pothnal', 'Sirwar Road', 'Kurdi']
    }
  },
  'Koppal': {
    taluks: ['Koppal', 'Gangavathi', 'Kushtagi', 'Yelburga', 'Karatagi', 'Kukanur'],
    defaultTaluk: 'Koppal',
    defaultVillage: 'Munirabad',
    villagesByTaluk: {
      'Koppal': ['Munirabad', 'Kinnal', 'Alavandi', 'Bhagyanagar'],
      'Gangavathi': ['Anegundi', 'Marali', 'Kanakagiri'],
      'Kushtagi': ['Tavargera', 'Hiregonnagara', 'Hanamsagar']
    }
  },
  'Chitradurga': {
    taluks: ['Chitradurga', 'Challakere', 'Hiriyur', 'Holalkere', 'Hosadurga', 'Molakalmuru'],
    defaultTaluk: 'Chitradurga',
    defaultVillage: 'Turuvanoor',
    villagesByTaluk: {
      'Chitradurga': ['Turuvanoor', 'Medehally', 'Kelagote', 'Doddasiddavvanahalli'],
      'Challakere': ['Parasurampura', 'Sanikere', 'Pagadalabanda'],
      'Hiriyur': ['Vani Vilasa Sagara', 'Aimangala', 'Dharmapura']
    }
  },
  'Gadag': {
    taluks: ['Gadag', 'Betageri', 'Ron', 'Shirhatti', 'Mundargi', 'Nargund', 'Lakkundi'],
    defaultTaluk: 'Gadag',
    defaultVillage: 'Lakkundi',
    villagesByTaluk: {
      'Gadag': ['Lakkundi', 'Hulkoti', 'Binkadakatti', 'Asundi'],
      'Ron': ['Gajendragad', 'Naregal', 'Hole Alur'],
      'Shirhatti': ['Lakshmeshwar', 'Bellatti', 'Hebbal']
    }
  },
  'Ramanagara': {
    taluks: ['Ramanagara', 'Channapatna', 'Kanakapura', 'Magadi'],
    defaultTaluk: 'Ramanagara',
    defaultVillage: 'Kailancha',
    villagesByTaluk: {
      'Ramanagara': ['Kailancha', 'Bidadi Hobli', 'Kootagal'],
      'Channapatna': ['Iggalur', 'Akkihebbalu', 'Makkalane'],
      'Kanakapura': ['Harohalli', 'Maralawadi', 'Uyyamballi']
    }
  },
  'Haveri': {
    taluks: ['Haveri', 'Ranebennur', 'Byadgi', 'Hirekerur', 'Hangal', 'Shiggaon', 'Savanur'],
    defaultTaluk: 'Byadgi',
    defaultVillage: 'Motebennur',
    villagesByTaluk: {
      'Byadgi': ['Motebennur', 'Kaginele', 'Mallur'],
      'Haveri': ['Guttal', 'Devagiri', 'Karajagi'],
      'Ranebennur': ['Halageri', 'Medleri', 'Chalageri']
    }
  },
  'Udupi': {
    taluks: ['Udupi', 'Kundapura', 'Karkala', 'Kaup', 'Byndoor', 'Brahmavara'],
    defaultTaluk: 'Udupi',
    defaultVillage: 'Malpe',
    villagesByTaluk: {
      'Udupi': ['Malpe', 'Santhekatte', 'Manipal Rural', 'Kallianpur'],
      'Kundapura': ['Koteshwara', 'Gangolli', 'Basrur'],
      'Karkala': ['Miyar', 'Belman', 'Ajekar']
    }
  },
  'Dakshina Kannada': {
    taluks: ['Mangaluru', 'Bantwal', 'Belthangady', 'Puttur', 'Sullia', 'Moodabidri', 'Kadaba'],
    defaultTaluk: 'Mangaluru',
    defaultVillage: 'Surathkal',
    villagesByTaluk: {
      'Mangaluru': ['Surathkal', 'Gurupura', 'Bajpe', 'Ullal Hobli'],
      'Bantwal': ['Panemangalore', 'Mani', 'Vittal'],
      'Puttur': ['Uppinangady', 'Kabaka', 'Kaniyoor']
    }
  },
  'Vijayanagara': {
    taluks: ['Hosapete', 'Harapanahalli', 'Huvina Hadagali', 'Kotturu', 'Hagaribommanahalli', 'Kudligi'],
    defaultTaluk: 'Hosapete',
    defaultVillage: 'Kamalapura',
    villagesByTaluk: {
      'Hosapete': ['Kamalapura', 'Hampi Rural', 'Mariyammanahalli'],
      'Harapanahalli': ['Teligi', 'Chigateri', 'Arasikere'],
      'Huvina Hadagali': ['Hirehadagali', 'Holalu', 'Ittagi']
    }
  },
  'Nashik': {
    taluks: ['Niphad', 'Nashik', 'Dindori', 'Sinnar', 'Yeola', 'Malegaon', 'Baglan'],
    defaultTaluk: 'Niphad',
    defaultVillage: 'Lasalgaon',
    villagesByTaluk: {
      'Niphad': ['Lasalgaon', 'Pimpalgaon Baswant', 'Kundewadi', 'Ranwad'],
      'Nashik': ['Deolali', 'Girnare', 'Mhasrul', 'Gangapur'],
      'Dindori': ['Vani', 'Nanashi', 'Mhasrul']
    }
  },
  'Pune': {
    taluks: ['Haveli', 'Baramati', 'Shirur', 'Junnar', 'Khed', 'Maval', 'Daund', 'Indapur'],
    defaultTaluk: 'Baramati',
    defaultVillage: 'Malegaon Budruk',
    villagesByTaluk: {
      'Baramati': ['Malegaon Budruk', 'Supe', 'Someshwarnagar', 'Morgaon'],
      'Haveli': ['Wagholi', 'Uruli Kanchan', 'Loni Kalbhor', 'Khadakwasla'],
      'Shirur': ['Shikrapur', 'Narayangaon', 'Pabal', 'Sanaswadi']
    }
  },
  'Ludhiana': {
    taluks: ['Ludhiana East', 'Ludhiana West', 'Jagraon', 'Khanna', 'Samrala', 'Payal', 'Raikot'],
    defaultTaluk: 'Jagraon',
    defaultVillage: 'Mullanpur',
    villagesByTaluk: {
      'Jagraon': ['Mullanpur', 'Swaddi Khas', 'Sidhwan Bet'],
      'Khanna': ['Samrala Road', 'Alour', 'Bhadla'],
      'Ludhiana East': ['Sahnewal', 'Kohara', 'Doraha']
    }
  }
};

export function getDefaultSubdivision(district: string, _state?: string): { taluk: string; village: string; taluks: string[]; villages: string[] } {
  const cleanDist = (district || '').trim();
  const info = DISTRICT_SUBDIVISIONS[cleanDist];
  if (info) {
    const villages = info.villagesByTaluk?.[info.defaultTaluk] || [info.defaultVillage];
    return {
      taluk: info.defaultTaluk,
      village: info.defaultVillage,
      taluks: info.taluks,
      villages
    };
  }

  // Realistic procedural fallback per district
  const genericTaluks = [`${cleanDist} North`, `${cleanDist} South`, `${cleanDist} East`, `${cleanDist} Rural`];
  return {
    taluk: `${cleanDist} North`,
    village: `${cleanDist} Hobli`,
    taluks: genericTaluks,
    villages: [`${cleanDist} Hobli`, `${cleanDist} Agripark`, `${cleanDist} Sector 1`]
  };
}

export function getVillagesForTaluk(district: string, taluk: string): string[] {
  const cleanDist = (district || '').trim();
  const cleanTaluk = (taluk || '').trim();
  const info = DISTRICT_SUBDIVISIONS[cleanDist];
  if (info?.villagesByTaluk?.[cleanTaluk]) {
    return info.villagesByTaluk[cleanTaluk];
  }
  return [`${cleanTaluk} Central`, `${cleanTaluk} North Gram`, `${cleanTaluk} Hobli`];
}
