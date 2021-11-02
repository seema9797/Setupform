import React,{useState} from 'react';
import {Form,Row,Col, Button} from 'react-bootstrap'
import { RiNewspaperLine} from 'react-icons/ri';
import {FaHandshake} from 'react-icons/fa';
function MyForm() {
    const [name,setName]=useState("");
    const[location,setLocation]=useState("")
    const[state,setState]=useState("")
    const[currancy,setCurrancy]=useState("")
    const[language,setLanguage]=useState("")
  
    const handleSubmit=(evt)=>{
       evt.preventDefault();
       if(name && location && state && currancy && language){
           alert(`organizaion name: ${name} \n location: ${location} \n State ${state} \n Currancy: ${currancy} \n language: ${language}`)
       }else{
           alert("Please enter the value")
       }
    }

  return (
    <div className="container">
        <div className="formdiv ">  
            <div className="heading">
                <span><RiNewspaperLine/></span>
                <h2>Risertechub Invoice - Orgainzation Setup</h2>
            </div>
            <div className="welcome">
            <h5>Welcome aboard,Ricky! <span><FaHandshake/></span></h5>
            <p>Enter your oraginzation details to get started with Risertechub Invoice</p>
            </div>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label >Organization Name<span className="impstar">*</span></Form.Label>
            <Form.Control 
            type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
        </Form.Group>
        

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Business Location<span  className="impstar">*</span></Form.Label>
            <Form.Select 
              value={location}
              onChange={e=>setLocation(e.target.value)}
            >
                <option> </option>
                <option>Algeria</option>
                <option>American-Samoa</option>
                <option>Andorra</option>
                <option>Angola</option>
                <option>Agulla</option>
                <option>Antarctica</option>
                <option>Antigua and Barbuda</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState2">
            <Form.Label>State/Province <span  className="impstar">*</span></Form.Label>
            <Form.Select 
            value={state}
            onChange={e=>setState(e.target.value)}
            >
                <option> </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </Form.Select>
            </Form.Group>
            
        </Row>
        <br /> 
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Currency</Form.Label>
            <Form.Select
            value={currancy}
            onChange={e=>setCurrancy(e.target.value)}
            >
                    <option> </option>
                    <option>USD-United States Dollars</option>
                    <option> EUR-Euro</option>
                    <option> GBP-United Kingdom Pounds</option>
                    <option> DZD-Algeria Dinars</option>
                    <option> ARP-Argentina Pesos</option>
                    <option> AUD-Australia Dollars</option>
                    <option> ATS-Austria Schillings</option>
                    <option> BSD-Bahamas Dollars</option>
                    <option> BBD-Barbados Dollars</option>
                    <option> BEF-Belgium Francs</option>
                    <option> BMD-Bermuda Dollars</option>
                    <option> BRR-Brazil Real</option>
                    <option> BGL-Bulgaria Lev</option>
                    <option> CAD-Canada Dollars</option>
                    <option> CLP-Chile Pesos</option>
                    <option> CNY-China Yuan Renmimbi</option>
                    <option> CYP-Cyprus Pounds</option>
                    <option> CSK-Czech Republic Koruna</option>
                    <option> DKK-Denmark Kroner</option>
                    <option> NLG-Dutch Guilders</option>
                    <option> XCD-Eastern Caribbean Dollars</option>
                    <option> EGP-Egypt Pounds</option>
                    <option> FJD-Fiji Dollars</option>
                    <option> FIM-Finland Markka</option>
                    <option> FRF-France Francs</option>
                    <option> DEM-Germany Deutsche Marks</option>
                    <option> XAU-Gold Ounces</option>
                    <option> GRD-Greece Drachmas</option>
                    <option> HKD-Hong Kong Dollars</option>
                    <option> HUF-Hungary Forint</option>
                    <option> ISK-Iceland Krona</option>
                    <option> INR-India Rupees</option>
                    <option> IDR-Indonesia Rupiah</option>
                    <option> IEP-Ireland Punt</option>
                    <option> ILS-Israel New Shekels</option>
                    <option> ITL-Italy Lira</option>
                    <option> JMD-Jamaica Dollars</option>
                    <option> JPY-Japan Yen</option>
                    <option> JOD-Jordan Dinar</option>
                    <option> KRW-Korea (South) Won</option>
                    <option> LBP-Lebanon Pounds</option>
                    <option> LUF-Luxembourg Francs</option>
                    <option> MYR-Malaysia Ringgit</option>
                    <option> MXP-Mexico Pesos</option>
                    <option> NLG-Netherlands Guilders</option>
                    <option> NZD-New Zealand Dollars</option>
                    <option> NOK-Norway Kroner</option>
                    <option> PKR-Pakistan Rupees</option>
                    <option> XPD-Palladium Ounces</option>
                    <option> PHP-Philippines Pesos</option>
                    <option> XPT-Platinum Ounces</option>
                    <option> PLZ-Poland Zloty</option>
                    <option> PTE-Portugal Escudo</option>
                    <option> ROL-Romania Leu</option>
                    <option> RUR-Russia Rubles</option>
                    <option> SAR-Saudi Arabia Riyal</option>
                    <option> XAG-Silver Ounces</option>
                    <option> SGD-Singapore Dollars</option>
                    <option> SKK-Slovakia Koruna</option>
                    <option> ZAR-South Africa Rand</option>
                    <option> KRW-South Korea Won</option>
                    <option> ESP-Spain Pesetas</option>
                    <option> XDR-Special Drawing Right (IMF)</option>
                    <option> SDD-Sudan Dinar</option>
                    <option> SEK-Sweden Krona</option>
                    <option> CHF-Switzerland Francs</option>
                    <option> TWD-Taiwan Dollars</option>
                    <option> THB-Thailand Baht</option>
                    <option> TTD-Trinidad and Tobago Dollars</option>
                    <option> TRL-Turkey Lira</option>
                    <option> VEB-Venezuela Bolivar</option>
                    <option> ZMK-Zambia Kwacha</option>
                    <option> EUR-Euro</option>
                    <option> XCD-Eastern Caribbean Dollars</option>
                    <option> XDR-Special Drawing Right (IMF)</option>
                    <option> XAG-Silver Ounces</option>
                    <option> XAU-Gold Ounces</option>
                    <option> XPD-Palladium Ounces</option>
                    <option> XPT-Platinum Ounces</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState2">
            <Form.Label>Language</Form.Label>
            <Form.Select 
            value={language}
            onChange={e=>setLanguage(e.target.value)}
            >
                
                <option value="English">English</option>
                <option value="Afrikaans">Afrikaans</option>
                <option value="Albanian">Albanian</option>
                <option value="Arabic">Arabic</option>
                <option value="Armenian">Armenian</option>
                <option value="Basque">Basque</option>
                <option value="English">English</option>
                <option value="Bengali">Bengali</option>
                <option value="Hindi">Hindi</option>
                <option value="Marathi">Marathi</option>
                <option value="Cambodian">Cambodian</option>
                <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                <option value="Croatian">Croatian</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Dutch">Dutch</option>
                <option value="Estonian">Estonian</option>
                <option value="Fiji">Fiji</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="Georgian">Georgian</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Hindi">Hindi</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Javanese">Javanese</option>
                <option value="Korean">Korean</option>
                <option value="Latin">Latin</option>
                <option value="Latvian">Latvian</option>
                <option value="Lithuanian">Lithuanian</option>
                <option value="Macedonian">Macedonian</option>
                <option value="Malay">Malay</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Maltese">Maltese</option>
                <option value="Maori">Maori</option>
                <option value="Marathi">Marathi</option>
                <option value="Mongolian">Mongolian</option>
                <option value="Nepali">Nepali</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Persian">Persian</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Quechua">Quechua</option>
                <option value="Romanian">Romanian</option>
                <option value="Russian">Russian</option>
                <option value="Samoan">Samoan</option>
                <option value="Serbian">Serbian</option>
                <option value="Slovak">Slovak</option>
                <option value="Slovenian">Slovenian</option>
                <option value="Spanish">Spanish</option>
                <option value="Swahili">Swahili</option>
                <option value="Swedish ">Swedish </option>
                <option value="Tamil">Tamil</option>
                <option value="Tatar">Tatar</option>
                <option value="Telugu">Telugu</option>
                <option value="Thai">Thai</option>
                <option value="Tibetan">Tibetan</option>
                <option value="Tonga">Tonga</option>
                <option value="Turkish">Turkish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Urdu">Urdu</option>
                <option value="Uzbek">Uzbek</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Welsh">Welsh</option>
                <option value="Xhosa">Xhosa</option>
            </Form.Select>
            </Form.Group>
            
        </Row>

        <p className="note"><span>Note: </span> You can change these details later in Settings ,if needed.</p>
        
        <hr className="hr"/>
        <Button variant="primary" type="submit" className="submit ml2">
            Submit
        </Button>

        <Button variant="light"  className="back" type="Back">
            Go Back
        </Button>
        <ul className="ppsing">
            <li><a href="1">Privacy policy</a></li>
            <li><a href="2">Sign Out</a></li>
        </ul>
        </Form>




        </div>  
        </div>
            
    )
}

export default MyForm;
