If You Have Forgotten to Quit the Mongod Server

You can use CTRL + C in your Terminal to shut down your mongod connection.


If you have closed down Terminal or Hyper and forgot to close down your mongod connection, you might get an error that says:

```

    2018-11-04T16:17:53.473+1300 E STORAGE  [initandlisten] Failed to set up listener: SocketException: Address already in use
    2018-11-04T16:17:53.474+1300 I CONTROL  [initandlisten] now exiting
    2018-11-04T16:17:53.474+1300 I CONTROL  [initandlisten] shutting down with code:48

```

In this case, you'll have to follow these steps to manually shut down the mongod process:

1. Open up a fresh Hyper Terminal tab

2. Paste the command below into Hyper:

sudo pkill -f mongod

sudo pkill -f mongosh

3. Now enter the password that you use to log on to the Mac.

4. Open a new Hyper terminal, you should now be able to run the mongod command again.