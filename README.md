# Vn Native 3 Form
This is a plugin of Vn Native Framework support action with element HTML

# How to install ? 

    npm install vnnative3-form

# How to use ?    

    import VnNative3Form from 'vnnative3-form/dist/index';

# How to get string value of input ?

    (new VnNative3Form("email")).stringValue();

# How to get number value of input ?

    (new VnNative3Form("email")).numberValue();  

# How to use Element event ?

    let email = (new VnNative3Form("email")).subscribe();  

    email.addEventListener(event_name,(ev : Event) => {
        // do a something 
    })
    