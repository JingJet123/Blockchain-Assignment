-----------------------Configuration-----------------------
-- Open new terminal
type Truffle Compile

Open ganache --> create NEW work space --> import truffle-config.js.

type Truffle migrate

-- Open new terminal
type node server.js

If show "port is open on 127.0.0.1:5000" , copy the 127.0.0.1:5000 and open it in your browser.

-----------------------Sample Test Data------------------------------------
--Farmer Registration
0xD100FCB5e1B9459871Df80798C088906080e3A12,"Farm A","123, Selangor" 

--Center Distributor Registration
0xE504dF110Fb9C8333F730A99981613bB4e6a46F2,"DC A", "456, Selangor"

--Retailer Registration
0x3D7eFb49142b2bD2e19B6DfE1779451Ea166506c,"Retailer A", "789, Selangor"

--Durian Harvest
1,"MusangKing",1,1

--Deliver to Distributor
"D1",0xE504dF110Fb9C8333F730A99981613bB4e6a46F2,"Land"

--Deliver to Retailer
0x3D7eFb49142b2bD2e19B6DfE1779451Ea166506c,"D1"

--Buy from Retailer
"D1"

--Rating
"D1",[1,1,1],"I Like It"