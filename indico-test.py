import indicoio
import operator

# use your unique api access code
indicoio.config.api_key = 'bbae77d5bf0a8ced94bb348563710d44'

# sentence definition
sentence = "I have put blood on her two clean yellow shoes."

# dictionary of keywords and importances
keywords = indicoio.keywords(sentence)
print(keywords)

# the key with the highest importance
top_key = max(keywords, key=keywords.get)
print(top_key)

words = sentence.split()