from lxml import html
from tempfile import NamedTemporaryFile
from random import *
from lxml.html import fromstring
from itertools import cycle
import shutil, csv, time, json, calendar, datetime, decimal, math, xlwt
import requests
import string
import pandas as pd
import numpy
import random
#from exceptions import ValueError
from time import sleep      
from _sqlite3 import Row
from click.decorators import password_option
from functools import total_ordering

if __name__ == "__main__":
    tempfile = NamedTemporaryFile(mode='wb', delete=False)
    fields = ['Name', 'Username', 'Password', 'Qty', 'Total', 'PaymentCard']
    with open('Database.csv', 'rb') as csvfile, tempfile:
        reader = csv.DictReader(csvfile, fieldnames=fields)
        writer = csv.DictWriter(tempfile, fieldnames=fields)
            
        while (1 == 1):
            #wait for username and password input
            for row in reader:
                if row['Username'] == username:
                    if row['Password'] == password:
                        #send authentication
                        #send user data
                        while (1 == 1):
                            exitconf = 0
                            #wait/get user values and exitconf
                            row['Name'] = name
                            row['Password'] = password
                            row['Qty'] = qty
                            row['Total'] = total
                            row['PaymentCard'] = paymentcard
                            writer.writerow(row)
                            if exitconf == 1:
                                break
                    else:
                        #send you fked up
                break
    shutil.move(tempfile.name, 'Database.csv')
    tempfile.close()

#def get_proxies():
    #url = 'https://free-proxy-list.net/'
    #response = requests.get(url)
    #parser = fromstring(response.text)
    #proxies = set()
    #for i in parser.xpath('//tbody/tr')[:10]:
        #if i.xpath('.//td[7][contains(text(),"yes")]'):
            #proxy = ":".join([i.xpath('.//td[1]/text()')[0], i.xpath('.//td[2]/text()')[0]])
            #proxies.add(proxy)
    #return proxies

print("Finished")


        
    