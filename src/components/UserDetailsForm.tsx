import React, { useState, useEffect} from 'react';
import UseQuery from '../hooks/UseQuery';
import { supabase } from '../config/supabase';
const UserDetailsForm = () => {
  let [formData, setFormData] = useState({
    name: '',
    phone: '',
    occupation: '',
    address: '',
  })
  const query = UseQuery();
  const id = query.get('id');
  const [userDetails, setUserDetails] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  const getUserDetails = async () => {
    setLoading(true);
    const { data, error } = await supabase
        .from('user-db')
        .update({ created_at: new Date(), name: formData.name, phone: formData.phone, address: formData.address, occupation: formData.occupation},)
        .match({ uuid: id })
    setUserDetails(data);
    console.log(userDetails);
    if (error) {
        console.log(error);
    }
    setLoading(false);
}
  useEffect(() => {
    getUserDetails();
  }, [])
  const formFields: any = [
    {
      id: 1,
      fieldName: 'name',
      placeholder: 'Name',
      isMandatory: true,
      value: formData.name,
      onchange: (val) => setFormData({ ...formData, name: val })
    },
    {
      id: 2,
      fieldName: 'phone',
      placeholder: 'Phone',
      isMandatory: true,
      value: formData.phone,
      onchange: (val) => setFormData({ ...formData, phone: val })
    },
    {
      id: 3,
      fieldName: 'occupation',
      placeholder: 'Occupation',
      isMandatory: true,
      value: formData.occupation,
      onchange: (val) => setFormData({ ...formData, occupation: val })
    },
    {
      id: 4,
      fieldName: 'address',
      placeholder: 'Address',
      isMandatory: true,
      value: formData.address,
      onchange: (val) => setFormData({ ...formData, address: val })
    }
  ]
  const sendFormData = () => {
      console.log(formData);
  }
//   useEffect(() => {
//       const datafromandroid = window?.sendData?;
//   },[])
  return (
    <div className="container" style={styles.container}>
      <div className='formContainer' style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           width: '80%',
           borderRadius: '20px',
           height: '500px',
           backgroundColor: '#FFFFFF',
           borderColor: '#2196F3',
           borderWidth: '5px',
           boxShadow: '10px',
           opacity: '0.8',
           position: 'relative',
      }}>
        <div className='inputContainer' style={styles.inputContainer}>
          {
            formFields.map((items) => {
              return (
                <div key={items.id}>
                  {items.isMandatory && <b>*</b>}
                  <input style={styles.TextInputStyleClass} placeholder={items.placeholder}
                    value={items.value} onChange={(val) => items.onchange(val.target.value)}  type={items.id === 2 ? 'number' : 'text'} />
                </div>
              )
            })
          }
        </div>
        <div style={{position: 'absolute', bottom: 10, right: 50}}>
          <button title='NEXT' onClick={sendFormData}  style={{color: '#2196F3', height: 50, width: 50, borderRadius:50, fontSize: 10,}}>Update</button>
          </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
  },

  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: '20px',
    height: '500px',
    backgroundColor: '#FFFFFF',
    borderColor: '#2196F3',
    borderWidth: '5px',
    boxShadow: '10px',
    opacity: '0.8',
  },
  inputContainer: {
    justifyContent: 'center',
    flex: '1',
    margin: '10px',
  },
  TextInputStyleClass: {
    height: '50px',
    width: '250px',
    borderWidth: '2px',
    borderColor: 'grey',
    borderRadius: '8px',
    backgroundColor: "#FFFFFF",
    margin: '10px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    // bottom: '15px',
    // right: '15px',
    borderWidth: '2px',
    borderColor: '#2196F3',
  },
  mandatory: {
    color: 'red',
  }

}

export default UserDetailsForm
