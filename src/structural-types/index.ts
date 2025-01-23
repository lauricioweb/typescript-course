type VerifyUserFn = (user:User, sentUser:User) => boolean;
type User = {nome:string, password:string};


const verifyUser:VerifyUserFn = (user,sentUser) =>{
return user.nome === sentUser.nome && user.password === sentUser.password;
}


const bdUser = {nome:"lauricio", password:"123"};
const sentUser = {nome:"lauricio", password:"123"};

const userLogged = verifyUser(bdUser,sentUser);

console.log(userLogged);