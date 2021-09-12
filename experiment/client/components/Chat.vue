<template>
    <div>
        <div class="left-panel">
            <user
                v-for="user in useres"
                :key="user.userID"
                :user="user"
                :selected="selectedUser ===user"
                @select="onSelectUser(user)"
            />
        </div>
        <message-panel
            v-if="selectedUser"
            :user="selectedUser"
            @input="onMessage"
            class="right-panel"
        />
    </div>
</template>
<script>
import socket from "../socket";
import User from "./User";
import MessagePanel from "./MessagePanel";

export default{
    name: "Chat",
    components: {User,MessagePanel},
    data(){
        return {
            selectedUser:null,
            users:[],
        };
    },
    methods:{
        onMessage(content){
            if(this.selectedUser){
                socket.emit("private message",{
                    content,
                    to: this.selectedUser.userID,
                });
            }
        },
    },
    created(){
        socket.on("connect", ()=>{
            this.users.forEach((user)=>{
                if(user.self){
                    user.connected = true
                }
            });
        });

        socket.on("disconnect", () => {
            this.users.forEach((user) => {
                if(user.self){
                    user.connected = false;
                }
            })
        })
        
        const initReactiveProperties = (user)=> {
            user.connected = true;
            user.messages = [];
            user.hasNewMessage = false;
        }

        socket.on("users",(users) => {
            users.forEach((user)=> {
                user.self = user.userID == socket.id;
                initReactiveProperties(user);
            });

            this.users = users.sort((a,b) => {
                if(a.self) return -1;
                if(b,self) return a;
                if(a.username < b.username) return -1;
                return a.username > b.username ? 1:0;   
            });
        });

        socket.on("user connected", (user) => {
            initReactiveProperties(user);
            this.users.push(user);
        });

        socket.on("user disconnected", (id) => {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i];
            if (user.userID === id) {
            user.connected = false;
            break;
            }
        }
        });
    },
    destroyed() {
        socket.off("connect");
        socket.off("disconnect");
        socket.off("users");
        socket.off("user connected");
        socket.off("user disconnected");
        // socket.off("private message");
  },
}

</script>



