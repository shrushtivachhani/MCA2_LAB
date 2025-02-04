import socket

HOST = 'localhost' #The server's hostname or IP address
PORT = 8080 #The port used by the server

# Create a TCP/IP socket
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

#You can see the family = socket.AF_INET defines the address family that this socket can accept - only IPv4 addresses.
#And type = socket.SOCK_STREAM defines that the socket accepts only TCP connections.

#connect to the server
client_socket.connect((HOST, PORT))
print('Connect to {}:{}'.format(HOST,PORT))

#send and receive message from the server
while True:
    #send a message to the server
    message = input('Enter a Message : ')
    client_socket.sendall(message.encode())
    # Receive the response from the server
    data = client_socket.recv(1024).decode()
    print('Received from server : {}'.format(data))
    #Close the connection when data is bye
    if data == 'bye':
        client_socket.close()
        break

#close the connection when send bye
print('Closing Connection')
client_socket.close()