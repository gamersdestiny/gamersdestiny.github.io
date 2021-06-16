marks = []
noof = len(marks)

inp=None

while inp!=0000:
	inp = int(input('enter marks '))
	if inp == 0000:
		continue
	marks.append(inp)
	print(marks)
	print(sum(marks)/len(marks))
