f = open('mad.txt', 'r')
currentline = ""
for line in f:
    if line.startswith('>'):
        line = line.rstrip('\n')
        print (line)
    else:
        line = line.rstrip('\n')
        currentline = currentline + line
        print (currentline)
        
f.close()
f1=open('mad1.txt','w')
f1.write(currentline)
f1.close()